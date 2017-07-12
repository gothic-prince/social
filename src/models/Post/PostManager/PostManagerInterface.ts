import {PostServiceInterface} from '../PostService/PostServiceInterface';
export interface PostManagerInterface {
  get(serviceName: String): PostServiceInterface;
  set(services: PostServiceInterface[]);
  add (service: PostServiceInterface);
}
