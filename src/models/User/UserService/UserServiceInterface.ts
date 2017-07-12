import {UserEntityInterface} from '../Entities/UserEntityInterface';
export interface UserServiceInterface {
  getName (): String;
  getUsers (): UserEntityInterface[];
  addUser (user: UserEntityInterface);
  removeUser (user: UserEntityInterface);
}
