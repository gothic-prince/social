import {PostServiceInterface} from './PostServiceInterface';
import {PostEntityInterface} from '../Entities/PostEntityInterface';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {
  POST_COMMENTS,
  POST_ALBUM,
  POST_AVA,
  POST_CONFERENCE,
  POST_MESSAGE,
  POST_POSTS
} from './Constants'
export class PostService implements PostServiceInterface {
  static CATEGORY_ALBUM = POST_ALBUM
  static CATEGORY_COMMENTS = POST_COMMENTS
  static CATEGORY_CONFERENCE = POST_CONFERENCE
  static CATEGORY_POSTS = POST_POSTS
  static CATEGORY_AVA = POST_AVA
  static CATEGORY_MESSAGE = POST_MESSAGE
  private serviceName: String;
  private posts: PostEntityInterface[] = [];
  protected storage: PostStorageEntities;
  constructor(serviceName: String, posts: PostEntityInterface[], storage: PostStorageEntities) {
    this.serviceName = serviceName;
    this.posts = posts;
    this.storage = storage;
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
    this.storage.add(post.getId(), post);
  }
}
