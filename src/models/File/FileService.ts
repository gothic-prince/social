import {FileServiceInterface} from './FileServiceInterface';
import {FileEntityInterface} from './Entities/FileEntityInterface';
export class FileService implements FileServiceInterface {
  private serviceName: String;
  private files: FileEntityInterface[] = [];
  getName(): String {
    return this.serviceName;
  }
  all(): FileEntityInterface[] {
    return this.files;
  }
  add(file: FileEntityInterface) {
    this.files.push(file);
  }
  remove(file: FileEntityInterface) {
    this.files = this.files.filter((filterFile: FileEntityInterface) => {
      return filterFile !== file;
    });
  }
}
