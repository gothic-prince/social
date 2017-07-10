import {UserServiceInterface} from './UserServiceInterface';

export interface UserManagerInterface {
  get (serviceName: String): UserServiceInterface;
  add (service: UserServiceInterface): UserServiceInterface;
  set(services: UserServiceInterface[]): UserServiceInterface;
}
