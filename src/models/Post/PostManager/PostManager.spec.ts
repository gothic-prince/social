import {PostManager} from './PostManager';
import {PostService} from '../PostService/PostService';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
describe('PostManager', () => {
  const postManager = new PostManager();
  const storage = new PostStorageEntities();
  const incomming = new PostService(PostService.CATEGORY_INCOMMING_MESSAGE, [], storage);
  const blacklist = new PostService(PostService.CATEGORY_BLACKLIST_MESSAGE, [], storage);
  const outgoing = new PostService(PostService.CATEGORY_OUTGOING_MESSAGE, [], storage);
  const post = new PostService(PostService.CATEGORY_POST, [], storage);
  postManager.set([incomming, blacklist, outgoing]);
  it('Should return undefined', () => {
    expect(postManager.get('')).toBe(undefined);
    expect(postManager.get('test')).toBe(undefined);
    expect(postManager.get('any')).toBe(undefined);
    expect(postManager.get(PostService.CATEGORY_POST)).toBe(undefined);
  });
  it('Should return incomming', () => {
    expect(postManager.get(PostService.CATEGORY_INCOMMING_MESSAGE)).toBe(incomming);
  });
  it('Should return blacklist', () => {
    expect(postManager.get(PostService.CATEGORY_BLACKLIST_MESSAGE)).toBe(blacklist);
  });
  it('Should return outgoing', () => {
    expect(postManager.get(PostService.CATEGORY_OUTGOING_MESSAGE)).toBe(outgoing);
  });
  it('Should return post', () => {
    postManager.add(post);
    expect(postManager.get(PostService.CATEGORY_POST)).toBe(post);
  });
});
