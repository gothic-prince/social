import {UserServiceInterface} from './UserServiceInterface';
import {UserEntityInterface} from '../Entities/UserEntityInterface';
import {StorageEntitiesUser} from '../Storage/StorageEntitiesUser';
export class UserService implements UserServiceInterface {
  static TYPE_LIKE = 'LIKE';
  static TYPE_ONLINE = 'ONLINE';
  static TYPE_OFFLINE = 'OFFLINE';
  static TYPE_FRIENDS = 'FRIENDS';
  static TYPE_SUBSCRIBERS = 'SUBSCRIBERS';
  static TYPE_ALL = 'ALL';
  static TYPE_CURRENT = 'CURRENT';
  private serviceName: String;
  private users: UserEntityInterface[] = [];
  protected storage: StorageEntitiesUser;
  constructor(serviceName: String, users: UserEntityInterface[], storage: StorageEntitiesUser) {
    this.serviceName = serviceName;
    this.storage = storage;
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
