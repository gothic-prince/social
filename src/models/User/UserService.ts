import {UserServiceInterface} from './UserServiceInterface';
import {UserEntityInterface} from './Entities/UserEntityInterface';

export class UserService implements UserServiceInterface {
  static TYPE_LIKE = 'LIKE';
  static TYPE_ONLINE = 'ONLINE';
  static TYPE_OFFLINE = 'OFFLINE';
  static TYPE_FRIENDS = 'FRIENDS';
  static TYPE_SUBSCRIBERS = 'SUBSCRIBERS';
  static TYPE_ALL = 'ALL';
  private serviceName: String;
  private users: UserEntityInterface[] = [];
  constructor(serviceName: String, users: UserEntityInterface[]) {
    this.serviceName = serviceName;
    this.users = users;
  }
  getName(): String {
    return this.serviceName;
  }
  getUsers(): UserEntityInterface[] {
    return this.users;
  }
}
