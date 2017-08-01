import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {PostServiceHttpFactory} from '../Factories/PostServiceHttpFactory';
import {PostServiceHttp} from 'models/Post/PostService/PostServiceHttp';
describe('PostServiceHttp', () => {
  const storage = new PostStorageEntities();
  const factory = new PostServiceHttpFactory();
  storage.reset();

  it ('Should return conferences of user with id 100', (done) => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_CONFERENCE, 100, storage);
    if (service instanceof PostServiceHttp) {
      service.fetch(() => {
        console.log('OK');
        expect(service.all().length).toBe(1);
        expect(service.all()[0].getId()).toBe(100000);
        // todo: Get users
        // expect(service.all()[0].getUserManager().get('[CONFERENCE]').getUsers().length).toBe(2);
        expect(service.all()[0].getPostManager().get(PostServiceHttpFactory.CATEGORY_MESSAGE).all().length).toBe(4);
        // todo: Check each item
        done();
      });
    }
  });
  it ('Should return conferences of user with id 102', (done) => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_CONFERENCE, 102, storage);
    if (service instanceof PostServiceHttp) {
      service.fetch(() => {
        console.log('OK2');
        expect(service.all().length).toBe(2);
        // todo: Get users
        // expect(service.all()[0].getUserManager().get('[CONFERENCE]').getUsers().length).toBe(2);
        expect(service.all()[0].getPostManager().get(PostServiceHttpFactory.CATEGORY_MESSAGE).all().length).toBe(4);
        expect(service.all()[1].getPostManager().get(PostServiceHttpFactory.CATEGORY_MESSAGE).all().length).toBe(3);
        // todo: Check each item
        done();
      });
    }
  });
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
