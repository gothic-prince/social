import {FileServiceInterface} from './FileServiceInterface';
import {FileEntityInterface} from './Entities/FileEntityInterface';
export class FileService implements FileServiceInterface {
  static CATEGORY_IMAGES = 'IMAGES';
  static CATEGORY_AUDIT = 'AUDIT';
  static CATEGORY_VIDEO = 'VIDEO';
  private serviceName: String;
  private files: FileEntityInterface[] = [];
  constructor(serviceName: String, files: FileEntityInterface[]) {
    this.serviceName = serviceName;
    this.files = files;
  }
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
