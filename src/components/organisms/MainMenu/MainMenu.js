import React from "react";
import logo from "../../../assets/images/logo.png";

import * as S from "./styles";
import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <S.Logo alt="Tatpapers" src={logo} />
      </Link>
    </S.Wrapper>
  );
};
