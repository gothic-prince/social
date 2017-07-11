import {UserEntity} from './UserEntity';
import {UserManager} from '../UserManager';
import {PostManager} from '../../Post/PostManager';
import {InfoManager} from '../../Info/InfoManager';
describe('UserEntity', () => {
  const userManager = new UserManager();
  const postManager = new PostManager();
  const infoManager = new InfoManager();
  const entity = new UserEntity(userManager, infoManager, postManager, 10);
  it('should return instance of UserManagerInterface', () => {
    expect(entity.getUserManager()).toBe(userManager)
  });
  it('should return instance of PostManagerInterface', () => {
    expect(entity.getPostManager()).toBe(postManager)
  });
  it('should return instance of InfoManagerInterface', () => {
    expect(entity.getInfoManager()).toBe(infoManager)
  });
  it('should return 10', () => {
    expect(entity.getId()).toBe(10)
  });
});
