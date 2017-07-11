import {InfoServiceInterface} from './InfoServiceInterface';

export interface InfoManagerInterface {
  get (serviceName: String): InfoServiceInterface;
  add (service: InfoServiceInterface);
  set(services: InfoServiceInterface[]);
}
