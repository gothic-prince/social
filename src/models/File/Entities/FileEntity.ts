import {FileEntityInterface} from './FileEntityInterface';
export class FileEntity implements FileEntityInterface {
  private dir: String;
  private url: String;
  constructor(dir: String = '', url: String = '') {
    this.setDir(dir);
    this.setUrl(url);
  }
  getDir(): String {
    return this.dir;
  }
  getUrl(): String {
    return this.url;
  }
  setDir(dir) {
    this.dir = dir;
  }
  setUrl(url) {
    this.url = url;
  }
}
