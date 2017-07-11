import {PostManagerInterface} from './PostManagerInterface';
import {PostServiceInterface} from './PostServiceInterface';
import {TSMap} from 'typescript-map';

export class PostManager implements PostManagerInterface {
  private services: TSMap <String, PostServiceInterface> = new TSMap<String, PostServiceInterface>();
  get(serviceName: String): PostServiceInterface {
    return this.services.get(serviceName);
  }
  add(service: PostServiceInterface) {
    this.services.set(service.getName(), service);
  }
  set(services: PostServiceInterface[]) {
    services.map((service: PostServiceInterface) => {
      this.services.set(service.getName(), service);
    });
  }
}
