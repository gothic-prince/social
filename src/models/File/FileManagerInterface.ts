import {FileServiceInterface} from './FileServiceInterface';

export interface FileManagerInterface {
  get(index): FileServiceInterface;
  all (): FileServiceInterface[];
  set(services: FileServiceInterface[]);
  add (service: FileServiceInterface);
}
