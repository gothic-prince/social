import {UserServiceInterface} from '../UserService/UserServiceInterface';
export interface UserServiceFactoryInterface {
  getUserService(serviceName: String, userId: Number): UserServiceInterface;
}
