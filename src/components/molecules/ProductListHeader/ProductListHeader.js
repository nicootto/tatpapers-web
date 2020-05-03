import React from "react";

import { FiFilter } from "react-icons/fi";

import * as S from "./styles";

export const ProductListHeader = ({ openFilterMenu }) => {
  return (
    <S.Wrapper>
      <S.FiltersButton onClick={openFilterMenu}>
        <S.Icon>
          <FiFilter />
        </S.Icon>
        <S.Filters>FILTROS</S.Filters>
      </S.FiltersButton>
    </S.Wrapper>
  );
};
