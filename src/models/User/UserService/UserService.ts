import {UserServiceInterface} from './UserServiceInterface';
import {UserEntityInterface} from '../Entities/UserEntityInterface';
import {TSMap} from 'typescript-map';

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
  public static allFromStore () {
    return UserService.usersStore.values();
  }
  public static getFromStore (id: Number) {
    const entity = UserService.usersStore.get(id);
    if (entity === undefined) {
      return null;
    }
    return entity;
  }
  protected static addToStore (user: UserEntityInterface) {
    UserService.usersStore.set(user.getId(), user);
  }
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
    UserService.addToStore(user);
  }
  removeUser(user: UserEntityInterface) {
    this.users = this.users.filter((filterUser: UserEntityInterface) => {
      return filterUser !== user;
    });
  }
  protected setUsers (users: UserEntityInterface[]) {
    users.map((user: UserEntityInterface) => {
      if (UserService.getFromStore(user.getId()) === null) {
        UserService.addToStore(user);
      }
      this.users.push(user);
    });
  }
}
