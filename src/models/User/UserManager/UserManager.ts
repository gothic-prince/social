import {TSMap} from 'typescript-map';
import {UserManagerInterface} from './UserManagerInterface';
import {UserServiceInterface} from '../UserService/UserServiceInterface';

export class UserManager implements UserManagerInterface {
  private services: TSMap<String, UserServiceInterface> = new TSMap<String, UserServiceInterface>();
  get(serviceName: String): UserServiceInterface {
    return this.services.get(serviceName);
  }
  add(service: UserServiceInterface) {
    this.services.set(service.getName(), service);
  }
  set(services: UserServiceInterface[]) {
    services.map((service: UserServiceInterface) => {
      this.services.set(service.getName(), service);
    });
  }
}
