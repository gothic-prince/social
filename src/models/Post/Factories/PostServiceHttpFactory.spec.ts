import {PostServiceHttpFactory} from './PostServiceHttpFactory';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
describe('PostServiceHttpFactory', () => {
  const factory = new PostServiceHttpFactory();
  const storage = new PostStorageEntities();
  describe('Should return current user', () => {
    /*
    const service = factory.get(PostServiceHttpFactory.CATEGORY_POSTS, null, storage);
    it ('Should be instance of UserServiceHttp', () => {
      expect(service instanceof UserServiceHttp).toBe(true);
    });
    it ('Should return url: /users/current.json', () => {
      if (service instanceof UserServiceHttp) {
        expect(service.getUrl()).toBe('/users/current.json');
      }
    });
    */
  });
});
