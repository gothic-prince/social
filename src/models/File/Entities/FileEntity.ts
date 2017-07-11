import {FileEntityInterface} from './FileEntityInterface';
export class FileEntity implements FileEntityInterface {
  private dir: String;
  private url: String;
  constructor(dir: String, url: String) {
    this.dir = dir;
    this.url = url;
  }
  getDir(): String {
    return this.dir;
  }
  getUrl(): String {
    return this.url;
  }
}
