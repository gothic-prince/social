import {PostServiceInterface} from './PostServiceInterface';

export interface PostManagerInterface {
  get(serviceName: String): PostServiceInterface;
  set(services: PostServiceInterface[]);
  add (service: PostServiceInterface);
}
