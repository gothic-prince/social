import {PostServiceHttpFactory} from './PostServiceHttpFactory';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {PostServiceHttp} from '../PostService/PostServiceHttp';
describe('PostServiceHttpFactory', () => {
  const factory = new PostServiceHttpFactory();
  const storage = new PostStorageEntities();
  describe('Should return posts', () => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_POSTS, 100018, storage);
    it ('Should be instance of PostServiceHttp', () => {
      expect(service instanceof PostServiceHttp).toBe(true);
    });
    it ('Should return url: /users/posts/100018/news.json', () => {
      if (service instanceof PostServiceHttp) {
        expect(service.getFetchModel().getUrlAll()).toBe('/users/posts/100018/news.json');
      }
    });
  });
  describe('Should return conference', () => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_CONFERENCE, 100001, storage);
    it ('Should be instance of PostServiceHttp', () => {
      expect(service instanceof PostServiceHttp).toBe(true);
    });
    it ('Should return url: /users/posts/100001/conferences.json', () => {
      if (service instanceof PostServiceHttp) {
        expect(service.getFetchModel().getUrlAll()).toBe('/users/posts/100001/conferences.json');
      }
    });
  });
  describe('Should return comments', () => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_COMMENTS, 100011, storage);
    it ('Should be instance of PostServiceHttp', () => {
      expect(service instanceof PostServiceHttp).toBe(true);
    });
    it ('Should return url: /posts/comments/100011.json', () => {
      if (service instanceof PostServiceHttp) {
        expect(service.getFetchModel().getUrlAll()).toBe('/posts/comments/100011.json');
      }
    });
  });
  describe('Should return message', () => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_MESSAGE, 100002, storage);
    it ('Should be instance of PostServiceHttp', () => {
      expect(service instanceof PostServiceHttp).toBe(true);
    });
    it ('Should return url: /posts/get/100002.json', () => {
      if (service instanceof PostServiceHttp) {
        expect(service.getFetchModel().getUrlOne()).toBe('/posts/get/100002.json');
      }
    });
  });
});
