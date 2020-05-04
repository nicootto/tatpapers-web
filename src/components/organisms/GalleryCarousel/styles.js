import styled from "styled-components";

import * as C from "../../../globalStyles/constants";

export const Image = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;

  @media (min-width: ${C.mediumScreen}) {
    height: 500px;
  }

  > img {
    width: auto;
    height: 100%;
    border-radius: 10px;
  }
`;
