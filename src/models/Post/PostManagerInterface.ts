import {PostServiceInterface} from './PostServiceInterface';

export interface PostManagerInterface {
  get(index): PostServiceInterface;
  all (): PostServiceInterface[];
  set(service: PostServiceInterface);
  add (service: PostServiceInterface);
}
