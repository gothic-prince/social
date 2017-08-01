import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {PostServiceHttpFactory} from '../Factories/PostServiceHttpFactory';
import {PostServiceHttp} from 'models/Post/PostService/PostServiceHttp';
describe('PostServiceHttp', () => {
  const storage = new PostStorageEntities();
  const factory = new PostServiceHttpFactory();
  storage.reset();
  /*
  it ('Should return conferences of user with id 100', (done) => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_CONFERENCE, 100, storage);
    if (service instanceof PostServiceHttp) {
      service.fetch(() => {
        expect(service.all().length).toBe(1);
        expect(service.all()[0].getId()).toBe(100);
        expect(service.all()[0]).toBe(storage.get(100));
        done();
      });
    }
  });
  */
  /*
  it ('Should return message of user with id 100', (done) => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_POSTS, 100, storage);
    if (service instanceof PostServiceHttp) {
      service.fetch(() => {
        expect(service.all().length).toBe(1);
        expect(service.all()[0].getId()).toBe(100);
        expect(service.all()[0]).toBe(storage.get(100));
        done();
      });
    }
  });
  */
  
});
