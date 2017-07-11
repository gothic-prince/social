import {PostService} from './PostService';
import {PostEntity} from './Entities/PostEntity';
import {InfoManager} from '../Info/InfoManager';
import {FileManager} from '../File/FileManager';
import {UserManager} from '../User/UserManager';
import {PostManager} from './PostManager';
import {PostEntityInterface} from './Entities/PostEntityInterface';
describe('PostService', () => {
  const info = new InfoManager();
  const file = new FileManager();
  const post = new PostManager();
  const user = new UserManager();
  const date = new Date();
  const service = new PostService(PostService.CATEGORY_POST, []);
  it('Should return post category', () => {
    expect(service.getName()).toBe(PostService.CATEGORY_POST);
  });
  it ('Should return 0 posts', () => {
    expect(service.all().length).toBe(0);
  });
  it ('Should return 4 posts', () => {
    const ids = [28361, 72365, 19238, 94723];
    ids.map((id) => {
      service.add(new PostEntity(date, id, info, file, post, user));
    });
    expect(service.all().length).toBe(4);
    service.all().map((postEntity: PostEntityInterface, index) => {
      expect(postEntity.getId()).toBe(ids[index]);
    });
  });
  it ('Should return 3 posts', () => {
    const ids = [28361, 19238, 94723];
    service.remove(service.all()[1]);
    expect(service.all().length).toBe(3);
    service.all().map((postEntity: PostEntityInterface, index) => {
      expect(postEntity.getId()).toBe(ids[index]);
    });
  });
});
