import {UserService} from './UserService';
import {UserEntity} from './Entities/UserEntity';
import {UserManager} from './UserManager';
import {InfoManager} from '../Info/InfoManager';
import {PostManager} from '../Post/PostManager';
import {UserEntityInterface} from './Entities/UserEntityInterface';

describe('UserService', () => {
  describe('Service: LIKE', () => {
    const users = [
      new UserEntity(new UserManager(), new InfoManager(), new PostManager(), 1),
      new UserEntity(new UserManager(), new InfoManager(), new PostManager(), 2),
      new UserEntity(new UserManager(), new InfoManager(), new PostManager(), 3),
      new UserEntity(new UserManager(), new InfoManager(), new PostManager(), 4)
    ];
    const service = new UserService(UserService.TYPE_LIKE, users);
    it('should return service name', () => {
      expect(service.getName()).toBe(UserService.TYPE_LIKE);
    })
    it('should return users\'s id', () => {
      service.getUsers().map((user: UserEntityInterface, index) => {
        expect(user.getId()).toBe(users[index].getId());
      });
    })
  })
  describe('Service: ONLINE', () => {
    const users = [
      new UserEntity(new UserManager(), new InfoManager(), new PostManager(), 10),
      new UserEntity(new UserManager(), new InfoManager(), new PostManager(), 20),
      new UserEntity(new UserManager(), new InfoManager(), new PostManager(), 38)
    ];
    const service = new UserService(UserService.TYPE_ONLINE, users);
    it('should return service name', () => {
      expect(service.getName()).toBe(UserService.TYPE_ONLINE);
    })
    it('should return users\'s', () => {
      expect(service.getUsers()).toBe(users);
    })
  })
  describe('Service: OFFLINE', () => {
    const service = new UserService(UserService.TYPE_OFFLINE, []);
    it('should return service name', () => {
      expect(service.getName()).toBe(UserService.TYPE_OFFLINE);
    })
  })
});
