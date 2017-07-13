import {UserServiceInterface} from './UserServiceInterface';
import {UserEntityInterface} from '../Entities/UserEntityInterface';
import {TSMap} from 'typescript-map';
import {StorageEntitiesUser} from '../../StorageEntities/StorageEntitiesUser';

export class UserService implements UserServiceInterface {
  static TYPE_LIKE = 'LIKE';
  static TYPE_ONLINE = 'ONLINE';
  static TYPE_OFFLINE = 'OFFLINE';
  static TYPE_FRIENDS = 'FRIENDS';
  static TYPE_SUBSCRIBERS = 'SUBSCRIBERS';
  static TYPE_ALL = 'ALL';
  static TYPE_CURRENT = 'CURRENT';
  private static usersStore: TSMap <Number, UserEntityInterface> = new TSMap <Number, UserEntityInterface> ();
  private serviceName: String;
  private users: UserEntityInterface[] = [];
  protected storage: StorageEntitiesUser = new StorageEntitiesUser();
  constructor(serviceName: String, users: UserEntityInterface[]) {
    this.serviceName = serviceName;
    this.setUsers(users);
  }
  getName(): String {
    return this.serviceName;
  }
  getUsers(): UserEntityInterface[] {
    return this.users;
  }
  addUser(user: UserEntityInterface) {
    this.users.push(user);
    this.storage.add(user.getId(), user);
  }
  removeUser(user: UserEntityInterface) {
    this.users = this.users.filter((filterUser: UserEntityInterface) => {
      return filterUser !== user;
    });
  }
  protected setUsers (users: UserEntityInterface[]) {
    users.map((user: UserEntityInterface) => {
      this.storage.add(user.getId(), user);
      this.users.push(user);
    });
  }
}
