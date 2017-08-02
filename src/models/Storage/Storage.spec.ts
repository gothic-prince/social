import {StorageModel} from './StorageModel';
import {StorageEntitiesUser} from '../User/Storage/StorageEntitiesUser';
import {PostStorageEntities} from '../Post/Storage/PostStorageEntities';
import {StorageEntitiesInfo} from '../Info/Storage/StorageEntitiesInfo';

describe('Storage', () => {
  const storage = new StorageModel();
  it('Should return object of StorageEntitiesUser', () => {
    expect(storage.get(StorageModel.STORAGE_USER) instanceof StorageEntitiesUser).toBe(true);
  });
  it('Should return object of PostStorageEntities', () => {
    expect(storage.get(StorageModel.STORAGE_POST) instanceof PostStorageEntities).toBe(true);
  });
  it('Should return object of StorageEntitiesInfo', () => {
    expect(storage.get(StorageModel.STORAGE_INFO) instanceof StorageEntitiesInfo).toBe(true);
  });
  it('Should return not null', () => {
    expect(storage.get(123)).toBe(null);
  });
});
