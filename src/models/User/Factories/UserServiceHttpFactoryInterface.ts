import {UserServiceFactoryInterface} from './UserServiceFactoryInterface';
export interface UserServiceHttpFactoryInterface extends UserServiceFactoryInterface {
  getSuccessFunc(): any;
  getErrorFunc(): any;
}
