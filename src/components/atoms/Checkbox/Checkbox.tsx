import * as React from "react";

import { IProps } from "./types";
import * as S from "./styles";

const ENTER_KEY: number = 13;
const SPACE_KEY: number = 32;

export const Checkbox: React.FC<IProps> = ({
  name,
  checked,
  onChange = () => null,
  children
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <S.Checkbox
      onClick={event => {
        event.preventDefault();
        onChange(event);
      }}
    >
      <S.Label>
        <input
          tabIndex={-1}
          type="checkbox"
          name={name}
          checked={checked}
          readOnly
        />
        <div
          ref={ref}
          tabIndex={0}
          onKeyDown={evt => {
            if (evt.which === SPACE_KEY || evt.which === ENTER_KEY) {
              evt.preventDefault();
              onChange(evt);
            }
          }}
        >
          <span></span>
        </div>
      </S.Label>
      {children}
    </S.Checkbox>
  );
};
