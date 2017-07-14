import {PostServiceInterface} from './PostServiceInterface';
import {PostEntityInterface} from '../Entities/PostEntityInterface';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
export class PostService implements PostServiceInterface {
  static CATEGORY_COMMENTS = 'COMMENTS'
  static CATEGORY_POST = 'POST'
  static CATEGORY_ALBUM = 'ALBUM'
  static CATEGORY_OUTGOING_MESSAGE = 'OUTGOING_MESSAGE'
  static CATEGORY_INCOMMING_MESSAGE = 'INCOMMING_MESSAGE'
  static CATEGORY_BLACKLIST_MESSAGE = 'BLACKLIST_MESSAGE'

  static CATEGORY_GROUP_MESSAGE = 'GROUP_MESSAGE'
  static CATEGORY_ITEM_MESSAGE = 'ITEM_MESSAGE'
  // GROUP_MESSAGE  --> ITEM_MESSAGE
  // COMMENTS       --> ITEM_MESSAGE
  // ALBUM          --> ITEM_MESSAGE
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
