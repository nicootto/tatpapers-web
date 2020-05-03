import React from "react";

import * as S from "./styles";

export const IconButton = ({ children, onClick }) => {
  return <S.Wrapper onClick={onClick}>{children}</S.Wrapper>;
};
