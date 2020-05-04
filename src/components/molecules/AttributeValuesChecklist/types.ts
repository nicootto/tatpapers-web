import { IFilterAttribute } from "../../../types/IFilterAttributes";

export interface IProps {
  values: IFilterAttribute[];
  onValueClick: (value: IFilterAttribute) => void;
}
