import {PostManager} from './PostManager';
import {PostService} from '../PostService/PostService';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
describe('PostManager', () => {
  const postManager = new PostManager();
  const storage = new PostStorageEntities();
  const comments = new PostService(PostService.CATEGORY_COMMENTS, [], storage);
  const conference = new PostService(PostService.CATEGORY_CONFERENCE, [], storage);
  const posts = new PostService(PostService.CATEGORY_POSTS, [], storage);
  postManager.set([comments, conference, posts]);
  it('Should return undefined', () => {
    expect(postManager.get('')).toBe(undefined);
    expect(postManager.get('test')).toBe(undefined);
    expect(postManager.get('any')).toBe(undefined);
    expect(postManager.get(PostService.CATEGORY_ALBUM)).toBe(undefined);
  });
  it('Should return comments', () => {
    expect(postManager.get(PostService.CATEGORY_COMMENTS)).toBe(comments);
  });
  it('Should return conference', () => {
    expect(postManager.get(PostService.CATEGORY_CONFERENCE)).toBe(conference);
  });
  it('Should return post', () => {
    postManager.add(posts);
    expect(postManager.get(PostService.CATEGORY_POSTS)).toBe(posts);
  });
});
