import {FileServiceInterface} from './FileServiceInterface';

export interface FileManagerInterface {
  get(serviceName): FileServiceInterface;
  set(services: FileServiceInterface[]);
  add (service: FileServiceInterface);
}
