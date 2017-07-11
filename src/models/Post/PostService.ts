import {PostServiceInterface} from './PostServiceInterface';
import {PostEntityInterface} from './Entities/PostEntityInterface';
export class PostService implements PostServiceInterface {
  private serviceName: String;
  private posts: PostEntityInterface[] = [];
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
