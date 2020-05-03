import styled, { keyframes } from "styled-components";

const slideAnimation = () => {
  return keyframes`
    from {
      transform: translateX("-100%");
    }
    to {
      transform: translateX(0);
    }`;
};

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: left;
`;

export const Lightbox = styled.div`
  width: auto;
  height: 100%;
  background-color: ${props => props.theme.colors.white};
  position: relative;
  left: 0;
  transform: translateX(-100%);
  animation: ${slideAnimation()} 0.4s both;
`;
