import {PostServiceFactoryInterface} from './PostServiceFactoryInterface';
import {PostFetchModelFactory} from './PostFetchModelFactory';
import {PostServiceInterface} from '../PostService/PostServiceInterface';

export class PostServiceHttpFactory implements PostServiceFactoryInterface {
  static CATEGORY_ANY = '***';
  get(serviceName: String, userId: Number): PostServiceInterface {
    // return new PostServiceHttp(serviceName, (new PostFetchModelFactory()).get(serviceName, userId));
    return null;
  }
}
