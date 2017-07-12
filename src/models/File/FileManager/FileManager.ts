import {FileManagerInterface} from './FileManagerInterface';
import {TSMap} from 'typescript-map';
import {FileServiceInterface} from '../FileService/FileServiceInterface';

export class FileManager implements FileManagerInterface {
  private services: TSMap <String, FileServiceInterface> = new TSMap <String, FileServiceInterface> ();
  get(serviceName): FileServiceInterface {
    return this.services.get(serviceName);
  }
  add(service: FileServiceInterface) {
    this.services.set(service.getName(), service);
  }
  set(services: FileServiceInterface[]) {
    services.map((service: FileServiceInterface) => {
      this.services.set(service.getName(), service);
    });
  }
}
