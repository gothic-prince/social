import {PostServiceInterface} from '../PostService/PostServiceInterface';
export interface PostServiceFactoryInterface {
  get(serviceName: String, userId: Number): PostServiceInterface;
}
