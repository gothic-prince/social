import {UserEntityInterface} from './Entities/UserEntityInterface';

export interface UserServiceInterface {
  getName (): String;
  getUsers (): UserEntityInterface[];
}
