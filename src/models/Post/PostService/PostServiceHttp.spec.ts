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
  it ('Should return post of user with id 100', (done) => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_POSTS, 100, storage);
    service.fetch(() => {
      expect(service.all().length).toBe(1);
      expect(service.all()[0].getId()).toBe(100009);
      // todo: Should return user with id 100
      // expect(service.all()[0].getUserManager().get('[AUTHOR]').getUsers().length).toBe(1);
      // expect(service.all()[0].getUserManager().get('[AUTHOR]').getUsers()[0].getId()).toBe(100);
      // todo: Should return comments
      // expect(service.all()[0].getPostManager().get('[comments]').all().length).toBe(4);
      // todo: Check each item by id and text
      done();
    });
  });
  it ('Should return post of user with id 102', (done) => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_POSTS, 102, storage);
    service.fetch(() => {
      expect(service.all().length).toBe(3);
      expect(service.all()[0].getId()).toBe(100010);
      expect(service.all()[1].getId()).toBe(100011);
      expect(service.all()[2].getId()).toBe(100012);
      // todo: Should return user with id 102
      // expect(service.all()[0].getUserManager().get('[AUTHOR]').getUsers().length).toBe(1);
      // expect(service.all()[0].getUserManager().get('[AUTHOR]').getUsers()[0].getId()).toBe(102);
      // todo: Should return comments
      // expect(service.all()[0].getPostManager().get('[comments]').all().length).toBe(0);
      // expect(service.all()[1].getPostManager().get('[comments]').all().length).toBe(0);
      // expect(service.all()[2].getPostManager().get('[comments]').all().length).toBe(1);
      // todo: Check each item by id and text
      done();
    });
  });
  it ('Should return post of user with id 103', (done) => {
    const service = factory.get(PostServiceHttpFactory.CATEGORY_POSTS, 103, storage);
    service.fetch(() => {
      expect(service.all().length).toBe(1);
      expect(service.all()[0].getId()).toBe(100013);
      // todo: Should return user with id 103
      // expect(service.all()[0].getUserManager().get('[AUTHOR]').getUsers().length).toBe(1);
      // expect(service.all()[0].getUserManager().get('[AUTHOR]').getUsers()[0].getId()).toBe(103);
      // todo: Should return comments
      // expect(service.all()[0].getPostManager().get('[comments]').all().length).toBe(0);
      // todo: Check each item by id and text
      done();
    });
  });
});
