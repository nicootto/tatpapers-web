import React from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";

import * as S from "./styles";

const modalRoot = document.getElementById("modal-root");

export const Overlay = ({
  children,
  show,
  hide,
  duration = 600,
  target = modalRoot
}) => {
  return (
    target &&
    ReactDOM.createPortal(
      <Transition in={show} timeout={duration} unmountOnExit>
        {state => (
          <S.Overlay onClick={hide}>
            <S.Lightbox onClick={e => e.stopPropagation()}>
              {children}
            </S.Lightbox>
          </S.Overlay>
        )}
      </Transition>,
      target
    )
  );
};
