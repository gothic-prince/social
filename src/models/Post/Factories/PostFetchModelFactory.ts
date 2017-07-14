
import {TSMap} from 'typescript-map';
import {PostFetchModelFactoryInterface} from './PostFetchModelFactoryInterface';
import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
export class PostFetchModelFactory implements PostFetchModelFactoryInterface {
  protected static models: TSMap <String, FetchModelInterface> = null;
  protected static getMap (): TSMap <String, FetchModelInterface> {
    if (PostFetchModelFactory.models === null) {
      PostFetchModelFactory.models = new TSMap <String, FetchModelInterface>();
      // PostFetchModelFactory.models.set(PostFetchModelFactory.CATEGORY_ANY, new servicename__PostFetchModel(null));
    }
    return PostFetchModelFactory.models;
  }
  get(serviceName: String, id: Number): FetchModelInterface {
    return Object.assign(PostFetchModelFactory.getMap().get(serviceName), {id: id});
  }
}
