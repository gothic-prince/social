import {TSMap} from 'typescript-map';
import {UserEntityInterface} from '../User/Entities/UserEntityInterface';
export class StorageEntitiesUser {
  protected static users: TSMap<Number, UserEntityInterface> = new TSMap <Number, UserEntityInterface>();
  all (): TSMap<Number, UserEntityInterface> {
    return StorageEntitiesUser.users;
  }
  get(id: Number): UserEntityInterface {
    return StorageEntitiesUser.users.get(id);
  }
  add(id: Number, entity: UserEntityInterface): UserEntityInterface {
    if (this.get(entity.getId()) === undefined) {
      StorageEntitiesUser.users.set(entity.getId(), entity);
    }
    return this.get(entity.getId());
  }
  reset() {
    StorageEntitiesUser.users = new TSMap <Number, UserEntityInterface>();
  }
}
