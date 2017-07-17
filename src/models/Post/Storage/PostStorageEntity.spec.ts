import {PostStorageEntities} from './PostStorageEntities';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {FileManager} from '../../File/FileManager/FileManager';
import {PostManager} from '../PostManager/PostManager';
import {UserManager} from '../../User/UserManager/UserManager';
import {PostEntity} from '../Entities/PostEntity';
describe('PostStorageEntities', () => {
  const storage = new PostStorageEntities();
  const entities =  [
    new PostEntity(new Date(), 100001, new InfoManager(), new FileManager(), new PostManager(), new UserManager()),
    new PostEntity(new Date(), 100002, new InfoManager(), new FileManager(), new PostManager(), new UserManager()),
    new PostEntity(new Date(), 100003, new InfoManager(), new FileManager(), new PostManager(), new UserManager())
  ];
  it('Should return 0 entities', () => {
    expect(storage.all().length).toBe(0);
  });
  it('Should return 2 entities', () => {
    storage.add(entities[0].getId(), entities[0]);
    storage.add(entities[1].getId(), entities[1]);
    expect(storage.all().length).toBe(2);
  });
  it('Should return 3 entities', () => {
    storage.add(entities[2].getId(), entities[2]);
    expect(storage.all().length).toBe(3);
  });
  it('Should return 3 entities', () => {
    storage.remove(entities[1]);
    expect(storage.all().length).toBe(2);
    expect(storage.get(entities[0].getId())).toBe(entities[0]);
    expect(storage.get(entities[2].getId())).toBe(entities[2]);
    expect(storage.get(entities[1].getId())).toBe(undefined);
  });
  it('Should return 0 entities: after reset', () => {
    storage.reset();
    expect(storage.all().length).toBe(0);
  });
});
