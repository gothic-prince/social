import {UserService} from './UserService';
import {UserServiceHttp} from './UserServiceHttp';
import {CurrentUserFetchModel} from '../FetchModel/CurrentUserFetchModel';
import {FriendsUserFetchModel} from '../FetchModel/FriendsUserFetchModel';
import {SubscribersUserFetchModel} from '../FetchModel/SubscribersUserFetchModel';
describe('UserServiceBackend', () => {
  it ('Should return current user: 100', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, new CurrentUserFetchModel());
    userService.fetch(() => {
      expect(userService.getUsers().length).toBe(1);
      expect(userService.getUsers()[0].getId()).toBe(100);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(100));
      done();
    });
  });
  it ('Should return 2 friends', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, new FriendsUserFetchModel(100));
    userService.fetch(() => {
      expect(userService.getUsers().length).toBe(2);
      expect(userService.getUsers()[0].getId()).toBe(102);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(102));
      expect(userService.getUsers()[1].getId()).toBe(103);
      expect(userService.getUsers()[1]).toBe(UserServiceHttp.getFromStore(103));
      done();
    });
  });
  it ('Should return 1 friends: 102', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, new FriendsUserFetchModel(102));
    userService.fetch(() => {
      expect(userService.getUsers().length).toBe(1);
      expect(userService.getUsers()[0].getId()).toBe(100);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(100));
      done();
    });
  });
  it ('Should return 1 friends. 103', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, new FriendsUserFetchModel(103));
    userService.fetch(() => {
      expect(userService.getUsers().length).toBe(1);
      expect(userService.getUsers()[0].getId()).toBe(100);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(100));
      done();
    });
  });
  it ('Should return 0 subscribers', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, new SubscribersUserFetchModel(100));
    userService.fetch(() => {
      expect(userService.getUsers().length).toBe(0);
      done();
    });
  });
  it ('Should return 1 subscribers: 102', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, new SubscribersUserFetchModel(102));
    userService.fetch(() => {
      expect(userService.getUsers().length).toBe(1);
      expect(userService.getUsers()[0].getId()).toBe(103);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(103));
      done();
    });
  });
  it ('Should return 0 subscribers: 103', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, new SubscribersUserFetchModel(103));
    userService.fetch(() => {
      expect(userService.getUsers().length).toBe(0);
      done();
    });
  });
});
