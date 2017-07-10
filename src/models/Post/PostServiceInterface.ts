import {PostEntityInterface} from './Entities/PostEntityInterface';

export interface PostServiceInterface {
  getName(): String;
  all (): PostEntityInterface[];
  remove(post: PostEntityInterface);
  add (post: PostEntityInterface);
}
