import {PostEntity} from './PostEntity';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {FileManager} from '../../File/FileManager/FileManager';
import {PostManager} from '../PostManager/PostManager';
import {UserManager} from '../../User/UserManager/UserManager';
describe('PostEntity', () => {
  const info = new InfoManager();
  const file = new FileManager();
  const post = new PostManager();
  const user = new UserManager();
  const id = 1;
  const date = new Date();
  const entity = new PostEntity(date, id, info, file, post, user);
  it ('Should return date', () => {
    expect(entity.getDate()).toBe(date);
  });
  it ('Should return id', () => {
    expect(entity.getId()).toBe(id);
  });
  it ('Should return instance of InfoManager', () => {
    expect(entity.getInfoManager()).toBe(info);
  });
  it ('Should return instance of FileManager', () => {
    expect(entity.getFileManager()).toBe(file);
  });
  it ('Should return instance of PostManager', () => {
    expect(entity.getPostManager()).toBe(post);
  });
  it ('Should return instance of UserManager', () => {
    expect(entity.getUserManager()).toBe(user);
  });
});
