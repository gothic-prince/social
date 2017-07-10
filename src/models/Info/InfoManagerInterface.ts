import {InfoServiceInterface} from './InfoServiceInterface';

export interface InfoManagerInterface {
  get (index): InfoServiceInterface;
  all (): InfoServiceInterface[];
  add (service: InfoServiceInterface);
  set(services: InfoServiceInterface[]);
}
