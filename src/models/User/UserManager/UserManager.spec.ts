import {UserManager} from './UserManager';
import {UserService} from '../UserService/UserService';
import {UserEntity} from '../Entities/UserEntity';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {PostManager} from '../../Post/PostManager/PostManager';
describe('UserManager', () => {
  const userManager = new UserManager();
  const all = new UserService(UserService.TYPE_ALL, [
    new UserEntity(
      new UserManager(),
      new InfoManager(),
      new PostManager(),
      1
    ),
    new UserEntity(
      new UserManager(),
      new InfoManager(),
      new PostManager(),
      2
    ),
    new UserEntity(
      new UserManager(),
      new InfoManager(),
      new PostManager(),
      3
    )
  ]);
  const online =  new UserService(UserService.TYPE_ONLINE, [
    new UserEntity(
      new UserManager(),
      new InfoManager(),
      new PostManager(),
      10
    ),
  ]);
  const sub = new UserService(UserService.TYPE_SUBSCRIBERS, [
    new UserEntity(
      new UserManager(),
      new InfoManager(),
      new PostManager(),
      20
    ),
    new UserEntity(
      new UserManager(),
      new InfoManager(),
      new PostManager(),
      21
    )
  ]);
  userManager.set([all, online, sub]);
  it('should return undefined', () => {
    expect(userManager.get(UserService.TYPE_FRIENDS)).toBe(undefined);
  });
  describe('Service: all', () => {
    it('should return instance of UserServiceInterface', () => {
      expect(userManager.get(UserService.TYPE_ALL)).toBe(all);
    });
    it('should return 3 entities', () => {
      expect(userManager.get(UserService.TYPE_ALL).getUsers().length).toBe(3);
    });
  })
  describe('Service: online', () => {
    it('should return instance of UserServiceInterface', () => {
      expect(userManager.get(UserService.TYPE_ONLINE)).toBe(online);
    });
    it('should return 1 entities', () => {
      expect(userManager.get(UserService.TYPE_ONLINE).getUsers().length).toBe(1);
    });
  })
  describe('Service: sub', () => {
    it('should return instance of UserServiceInterface', () => {
      expect(userManager.get(UserService.TYPE_SUBSCRIBERS)).toBe(sub);
    });
    it('should return 2 entities', () => {
      expect(userManager.get(UserService.TYPE_SUBSCRIBERS).getUsers().length).toBe(2);
    });
  })
});
