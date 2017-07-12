import {UserServiceInterface} from '../UserService/UserServiceInterface';
export interface UserServiceFactoryInterface {
  getUserService(serviceName: String, id: Number): UserServiceInterface;
}
