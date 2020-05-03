import React, { useState } from "react";

import { maybe } from "../../utils/utils";
import { useCategory, useLabels } from "../../api/api";

import { Container } from "../../components/atoms/Container/Container";
import { ProductList } from "../../components/organisms/ProductList";
import { ProductListHeader } from "../../components/molecules/ProductListHeader";
import { FilterSidebar } from "../../components/organisms/FilterSidebar";

export const CategoryPage = ({ match }) => {
  const id = match.params.id;
  const [category, categoryLoading] = useCategory(id);
  const [labels, labelsLoading] = useLabels();
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState([]);
  const products = maybe(() => category.products, null);

  const attributes = labels.map(label => ({
    id: label.id,
    name: label.name,
    slug: label.name,
    selected: false
  }));

  return (
    <Container>
      <FilterSidebar
        show={showFilter}
        hide={() => setShowFilter(false)}
        attributes={attributes}
      />
      <ProductListHeader openFilterMenu={() => setShowFilter(true)} />
      <ProductList products={products} loading={categoryLoading} />
    </Container>
  );
};
