import {StorageInterface} from './StorageInterface';
import {StorageEntitiesUser} from '../User/Storage/StorageEntitiesUser';
import {PostStorageEntities} from '../Post/Storage/PostStorageEntities';
import {StorageEntitiesInfo} from '../Info/Storage/StorageEntitiesInfo';
import {TSMap} from 'typescript-map';
export class StorageModel implements StorageInterface {
  static STORAGE_USER = 1;
  static STORAGE_POST = 2;
  static STORAGE_INFO = 3;
  static STORAGE_FILE = 4;
  protected storage: TSMap <Number, any> = new TSMap <Number, any>();
  constructor() {
    this.storage.set(StorageModel.STORAGE_USER, new StorageEntitiesUser());
    this.storage.set(StorageModel.STORAGE_POST, new PostStorageEntities());
    this.storage.set(StorageModel.STORAGE_INFO, new StorageEntitiesInfo());
    this.storage.set(StorageModel.STORAGE_FILE, null);
  }
  get<T>(storageName: Number): T {
    const storage = this.storage.get(storageName)
    if (storage === undefined) {
      return null
    }
    return <T>storage;
  }
}
