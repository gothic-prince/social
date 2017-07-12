import {InfoManagerInterface} from './InfoManagerInterface';
import {TSMap} from 'typescript-map';
import {InfoServiceInterface} from '../InfoService/InfoServiceInterface';

export class InfoManager implements InfoManagerInterface {
  private services: TSMap <String, InfoServiceInterface> = new TSMap <String, InfoServiceInterface> ();
  get(serviceName: String): InfoServiceInterface {
    return this.services.get(serviceName);
  }
  add(service: InfoServiceInterface) {
    this.services.set(service.getName(), service);
  }
  set(services: InfoServiceInterface[]) {
    services.map((service: InfoServiceInterface) => {
      this.services.set(service.getName(), service);
    });
  }
}
