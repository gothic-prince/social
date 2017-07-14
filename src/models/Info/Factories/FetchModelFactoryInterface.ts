import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
export interface FetchModelFactoryInterface {
  get(serviceName: String, id: Number): FetchModelInterface;
}
