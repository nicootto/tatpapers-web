import * as React from "react";

import { Checkbox } from "../../atoms/Checkbox";

import * as S from "./styles";
import { IProps } from "./types";

export const AttributeValuesChecklist: React.FC<IProps> = ({
  values,
  onValueClick
}) => {
  return (
    <S.Wrapper>
      {values.map(value => (
        <Checkbox
          key={value.id}
          name={value.name}
          checked={value.selected}
          onChange={() => onValueClick(value)}
        >
          {value.name}
        </Checkbox>
      ))}
    </S.Wrapper>
  );
};
