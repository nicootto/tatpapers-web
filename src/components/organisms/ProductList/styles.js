import styled from "styled-components";
import { mediumScreen, smallScreen } from "../../../globalStyles/constants";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  place-items: center;
  object-fit: cover;

  @media (min-width: ${smallScreen}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }

  @media (min-width: ${mediumScreen}) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }

  a {
    height: 100%;
  }
`;
