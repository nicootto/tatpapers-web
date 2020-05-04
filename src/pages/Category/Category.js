import React, { useState } from "react";
import { isEmpty } from "lodash";
import { useQueryParam, withDefault, ArrayParam } from "use-query-params";

import { maybe } from "../../utils/utils";
import { useCategory, useLabels } from "../../api/api";

import { Container } from "../../components/atoms/Container/Container";
import { ProductList } from "../../components/organisms/ProductList";
import { ProductListHeader } from "../../components/molecules/ProductListHeader";
import { FilterSidebar } from "../../components/organisms/FilterSidebar";

const retrieveFilterIds = (filters, labels) => {
  if (isEmpty(labels) || isEmpty(filters)) {
    return [];
  }

  return filters.map(
    filter => labels.find(label => label.name.toLowerCase() === filter).id
  );
};

export const CategoryPage = ({ match }) => {
  const id = match.params.id;
  const [filters, setFilters] = useQueryParam(
    "filtros",
    withDefault(ArrayParam, [])
  );
  const [labels, labelsLoading] = useLabels();
  const [category, categoryLoading] = useCategory(
    id,
    retrieveFilterIds(filters, labels)
  );
  const [showFilter, setShowFilter] = useState(false);

  const products = maybe(() => category.products, null);

  const attributes = labels.map(label => ({
    id: label.id,
    name: label.name,
    slug: label.name,
    selected: !!filters.find(x => x === label.name.toLowerCase())
  }));

  const onFilterChange = value => {
    const filter = value.name.toLowerCase();
    const valueExists = !!filters.find(x => x === filter);
    if (valueExists) {
      setFilters(filters.filter(x => x !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <Container>
      <FilterSidebar
        show={showFilter}
        hide={() => setShowFilter(false)}
        attributes={attributes}
        onFilterChange={onFilterChange}
      />
      <ProductListHeader openFilterMenu={() => setShowFilter(true)} />
      <ProductList products={products} loading={categoryLoading} />
    </Container>
  );
};
