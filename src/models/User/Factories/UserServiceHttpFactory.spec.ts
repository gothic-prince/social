import {UserServiceHttpFactory} from './UserServiceHttpFactory';
import {UserServiceHttp} from '../UserService/UserServiceHttp';
import {StorageEntitiesUser} from '../Storage/StorageEntitiesUser';
describe('UserServiceHttpFactory', () => {
  const factory = new UserServiceHttpFactory();
  const storage = new StorageEntitiesUser();
  describe('Should return current user', () => {
    const service = factory.getUserService(UserServiceHttpFactory.CATEGORY_CURRENT, null, storage);
    it ('Should be instance of UserServiceHttp', () => {
      expect(service instanceof UserServiceHttp).toBe(true);
    });
    it ('Should return url: /users/current.json', () => {
      if (service instanceof UserServiceHttp) {
        expect(service.getUrl()).toBe('/users/current.json');
      }
    });
  });
  describe('Should return friends', () => {
    const service = factory.getUserService(UserServiceHttpFactory.CATEGORY_FRIENDS, 2873, storage);
    it ('Should be instance of UserServiceHttp', () => {
      expect(service instanceof UserServiceHttp).toBe(true);
    });
    it ('Should return url: /users/find/2873/friends.json', () => {
      if (service instanceof UserServiceHttp) {
        expect(service.getUrl()).toBe('/users/find/2873/friends.json');
      }
    });
  });
  describe('Should return subscribers', () => {
    const service = factory.getUserService(UserServiceHttpFactory.CATEGORY_SUBSCRIBERS, 1313, storage);
    it ('Should be instance of UserServiceHttp', () => {
      expect(service instanceof UserServiceHttp).toBe(true);
    });
    it ('Should return url: /users/find/1313/subscribers.json', () => {
      if (service instanceof UserServiceHttp) {
        expect(service.getUrl()).toBe('/users/find/1313/subscribers.json');
      }
    });
  });
  describe('Should return likes', () => {
    const service = factory.getUserService(UserServiceHttpFactory.CATEGORY_LIKES, 2412, storage);
    it ('Should be instance of UserServiceHttp', () => {
      expect(service instanceof UserServiceHttp).toBe(true);
    });
    it ('Should return url: /users/find/2412/likes.json', () => {
      if (service instanceof UserServiceHttp) {
        expect(service.getUrl()).toBe('/users/find/2412/likes.json');
      }
    });
  });
  describe('Should return blacklist', () => {
    const service = factory.getUserService(UserServiceHttpFactory.CATEGORY_BLACKLIST, 43512, storage);
    it ('Should be instance of UserServiceHttp', () => {
      expect(service instanceof UserServiceHttp).toBe(true);
    });
    it ('Should return url: /users/find/43512/blacklist.json', () => {
      if (service instanceof UserServiceHttp) {
        expect(service.getUrl()).toBe('/users/find/43512/blacklist.json');
      }
    });
  });
});
