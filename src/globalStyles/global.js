import { createGlobalStyle } from "styled-components";
import reset from "reset-css/reset.css";

import * as C from "./constants";
import { baseFontColor } from "./constants";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: ${C.baseFontFamily};
    font-size: ${C.baseFontSize};
    line-height: ${C.baseLineHeight};
    color: ${baseFontColor};
    
    * {
      box-sizing: border-box;
    }
    
    h1 {
      font-size: ${C.h1FontSize};
      line-height: ${C.h1LineHeight};
    }
    
    h2 {
      font-family: ${C.headerFontFamily};
      font-size: ${C.h2FontSize};
      line-height: 1.7rem;
    }

    h3 {
      font-size: ${C.h3FontSize};
      line-height: 1.7rem;
    }

    h4 {
      font-size: ${C.h4FontSize};
    }
    
    button {
      background-color: transparent;
      cursor: pointer;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      outline: none;
      padding: 0px;
    }
        
  }
`;
