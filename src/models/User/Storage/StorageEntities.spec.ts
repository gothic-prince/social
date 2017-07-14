import {StorageEntitiesUser} from './StorageEntitiesUser';
import {UserEntity} from '../Entities/UserEntity';
describe('StorageEntitiesUser', () => {
  const storage = new StorageEntitiesUser();
  it('Should return 0', () => {
    storage.reset();
    expect(storage.all().length).toBe(0)
  });
  it('Should return one entity, which has id: 1', () => {
    storage.add(1, new UserEntity(null, null, null, 1))
    expect(storage.all().length).toBe(1);
    expect(storage.get(1).getId()).toBe(1);
  });
  it('Should return 3 entities', () => {
    storage.add(2, new UserEntity(null, null, null, 2));
    storage.add(3, new UserEntity(null, null, null, 3));
    expect(storage.all().length).toBe(3);
    expect(storage.get(1).getId()).toBe(1);
    expect(storage.get(2).getId()).toBe(2);
    expect(storage.get(3).getId()).toBe(3);
  });
  it('Should return 0 again', () => {
    storage.reset();
    expect(storage.all().length).toBe(0)
  });
});
