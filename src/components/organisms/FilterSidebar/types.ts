import {IFilterAttribute} from "../../../types/IFilterAttributes";

export interface IProps {
  show: boolean,
  hide: () => void,
  attributes: IFilterAttribute[]
}