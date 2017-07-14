import {UserServiceInterface} from '../UserService/UserServiceInterface';
import {StorageEntitiesUser} from '../Storage/StorageEntitiesUser';
export interface UserServiceFactoryInterface {
  getUserService(serviceName: String, id: Number, storage: StorageEntitiesUser): UserServiceInterface;
}
