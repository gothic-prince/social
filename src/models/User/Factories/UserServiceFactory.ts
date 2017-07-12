import {UserServiceFactoryInterface} from './UserServiceFactoryInterface';
import {UserServiceInterface} from '../UserService/UserServiceInterface';
export abstract class UserServiceFactory implements UserServiceFactoryInterface {
  getUserService(serviceName: String, userId: Number): UserServiceInterface {
    switch (serviceName) {
      case '':
        return null;
      default:
        return null;
    }
  }
}
