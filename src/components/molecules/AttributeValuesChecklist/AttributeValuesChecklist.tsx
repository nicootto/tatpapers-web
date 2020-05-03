import * as React from "react";

import { Checkbox } from "../../atoms/Checkbox";

import * as S from "./styles";
import { IProps } from "./types";

export const AttributeValuesChecklist: React.FC<IProps> = ({ values }) => {
  return (
    <S.Wrapper>
      {values.map(value => (
        <Checkbox
          name={value.name}
          checked={value.selected}
          onChange={() => {}}
        >
          {value.name}
        </Checkbox>
      ))}
    </S.Wrapper>
  );
};
