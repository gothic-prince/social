import {PostServiceInterface} from './PostServiceInterface';
import {PostEntityInterface} from './Entities/PostEntityInterface';
export class PostService implements PostServiceInterface {
  static CATEGORY_COMMENTS = 'COMMENTS'
  static CATEGORY_POST = 'POST'
  static CATEGORY_ALBUM = 'ALBUM'
  static CATEGORY_OUTGOING_MESSAGE = 'OUTGOING_MESSAGE'
  static CATEGORY_INCOMMING_MESSAGE = 'INCOMMING_MESSAGE'
  static CATEGORY_BLACKLIST_MESSAGE = 'BLACKLIST_MESSAGE'
  private serviceName: String;
  private posts: PostEntityInterface[] = [];
  constructor(serviceName: String, posts: PostEntityInterface[]) {
    this.serviceName = serviceName;
    this.posts = posts;
  }
  getName(): String {
    return this.serviceName;
  }
  all(): PostEntityInterface[] {
    return this.posts;
  }
  remove(post: PostEntityInterface) {
    this.posts = this.posts.filter((filterPost: PostEntityInterface) => {
      return filterPost !== post;
    });
  }
  add(post: PostEntityInterface) {
    this.posts.push(post);
  }
}
