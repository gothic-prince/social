import {UserService} from './UserService';
import {UserServiceHttp} from './UserServiceHttp';
describe('UserServiceBackend', () => {
  it ('Should return current user: 100', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, '/users/current.json', () => {
      expect(userService.getUsers().length).toBe(1);
      expect(userService.getUsers()[0].getId()).toBe(100);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(100));
      done();
    }, (message) => {
      console.error(message);
    });
    userService.fetch();
  });
  it ('Should return 2 friends', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, '/users/find/100/friends.json', () => {
      expect(userService.getUsers().length).toBe(2);
      expect(userService.getUsers()[0].getId()).toBe(102);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(102));
      expect(userService.getUsers()[1].getId()).toBe(103);
      expect(userService.getUsers()[1]).toBe(UserServiceHttp.getFromStore(103));
      done();
    }, (message) => {
      console.error(message);
    });
    userService.fetch();
  });
  it ('Should return 1 friends: 102', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, '/users/find/102/friends.json', () => {
      expect(userService.getUsers().length).toBe(1);
      expect(userService.getUsers()[0].getId()).toBe(100);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(100));
      done();
    }, (message) => {
      console.error(message);
    });
    userService.fetch();
  });
  it ('Should return 1 friends. 103', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, '/users/find/103/friends.json', () => {
      expect(userService.getUsers().length).toBe(1);
      expect(userService.getUsers()[0].getId()).toBe(100);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(100));
      done();
    }, (message) => {
      console.error(message);
    });
    userService.fetch();
  });
  it ('Should return 0 subscribers', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, '/users/find/100/subscribers.json', () => {
      expect(userService.getUsers().length).toBe(0);
      done();
    }, (message) => {
      console.error(message);
    });
    userService.fetch();
  });
  it ('Should return 1 subscribers: 102', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, '/users/find/102/subscribers.json', () => {
      expect(userService.getUsers().length).toBe(1);
      expect(userService.getUsers()[0].getId()).toBe(103);
      expect(userService.getUsers()[0]).toBe(UserServiceHttp.getFromStore(103));
      done();
    }, (message) => {
      console.error(message);
    });
    userService.fetch();
  });
  it ('Should return 0 subscribers: 103', (done) => {
    const userService = new UserServiceHttp(UserService.TYPE_CURRENT, '/users/find/103/subscribers.json', () => {
      expect(userService.getUsers().length).toBe(0);
      done();
    }, (message) => {
      console.error(message);
    });
    userService.fetch();
  });
});
