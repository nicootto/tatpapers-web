import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1.4rem;
  height: 5rem;
  background-color: ${props => props.theme.tile.backgroundColor};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: ${props => props.theme.typography.smallFontSize};
  border-radius: 10px;
`;

export const FiltersButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${props => props.theme.typography.smallFontSize};
`;

export const Icon = styled.div`
  > svg {
    height: 2rem;
    width: 2rem;
  }
`;

export const Filters = styled.div`
  margin: 0 0.6rem;
`;
