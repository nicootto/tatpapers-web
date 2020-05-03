import styled from "styled-components";

export const Wrapper = styled.div`
  width: 410px;
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  box-shadow: 6px 0px 30px rgba(0, 0, 0, 0.15);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  width: 80%;

  font-weight: ${props => props.theme.typography.boldFontWeight};
  font-size: ${props => props.theme.typography.h3FontSize};
`;
