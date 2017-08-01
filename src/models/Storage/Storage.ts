import {StorageInterface} from './StorageInterface';
import {StorageEntitiesUser} from '../User/Storage/StorageEntitiesUser';
import {PostStorageEntities} from '../Post/Storage/PostStorageEntities';
import {StorageEntitiesInfo} from '../Info/Storage/StorageEntitiesInfo';
export class Storage implements StorageInterface {
  static STORAGE_USER = 1;
  static STORAGE_POST = 2;
  static STORAGE_INFO = 3;
  static STORAGE_FILE = 4;
  protected userStorage = new StorageEntitiesUser();
  protected postStorage = new PostStorageEntities();
  protected infoStorage = new StorageEntitiesInfo();
  protected fileStorage = null;
  // todo: I need make storage model
  get<T>(storageName: Number): T {
    switch (storageName) {
      case Storage.STORAGE_USER:
        return this.userStorage;
      case Storage.STORAGE_POST:
        return this.postStorage;
      case Storage.STORAGE_INFO:
        return this.infoStorage;
      case Storage.STORAGE_FILE:
        return this.fileStorage;
      default:
        throw new Error('Can not find storage');
    }
  }
}
