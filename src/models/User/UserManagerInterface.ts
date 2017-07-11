import {UserServiceInterface} from './UserServiceInterface';

export interface UserManagerInterface {
  get (serviceName: String): UserServiceInterface;
  add (service: UserServiceInterface);
  set(services: UserServiceInterface[]);
}
