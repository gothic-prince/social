import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
export interface PostFetchModelFactoryInterface {
  get(serviceName: String, id: Number): FetchModelInterface;
}
