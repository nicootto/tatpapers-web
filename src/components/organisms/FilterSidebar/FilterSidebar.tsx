import * as React from "react";
import { GrClose } from "react-icons/gr";

import { Overlay } from "../Overlay";
import { IconButton } from "../../atoms/IconButton";
import { AttributeValuesChecklist } from "../../molecules/AttributeValuesChecklist";

import * as S from "./styles";
import { IProps } from "./types";

export const FilterSidebar: React.FC<IProps> = ({
  show,
  hide,
  attributes,
  onFilterChange
}) => {
  return (
    <Overlay show={show} hide={hide} duration={0}>
      <S.Wrapper>
        <S.Header>
          <span>FILTROS</span>
          <IconButton onClick={hide}>
            <GrClose />
          </IconButton>
        </S.Header>
        <AttributeValuesChecklist
          values={attributes}
          onValueClick={onFilterChange}
        />
      </S.Wrapper>
    </Overlay>
  );
};
