import {TSMap} from 'typescript-map';
import {PostEntityInterface} from '../Entities/PostEntityInterface';
export class PostStorageEntities {
  protected posts: TSMap<Number, PostEntityInterface> = new TSMap <Number, PostEntityInterface>();
  all (): TSMap<Number, PostEntityInterface> {
    return this.posts;
  }
  get(id: Number): PostEntityInterface {
    return this.posts.get(id);
  }
  add(id: Number, entity: PostEntityInterface): PostEntityInterface {
    if (this.get(id) === undefined) {
      this.posts.set(id, entity);
    }
    return this.get(id);
  }
  remove (entity: PostEntityInterface) {
    this.posts.delete(entity.getId());
  }
  reset() {
    this.posts = new TSMap <Number, PostEntityInterface>();
  }
}
