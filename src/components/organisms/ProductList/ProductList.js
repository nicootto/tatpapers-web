import React from "react";
import { Link } from "react-router-dom";

import { generateProductUrl } from "../../../utils/utils";

import { Loader } from "../../atoms/Loader";
import { ProductTile } from "../../molecules/ProductTile/ProductTile";

import * as S from "./styles";

export const ProductList = ({ products, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      <S.List>
        {products.map(product => (
          <Link to={generateProductUrl(product.id)} key={product.id}>
            <ProductTile product={product} />
          </Link>
        ))}
      </S.List>
    </>
  );
};
