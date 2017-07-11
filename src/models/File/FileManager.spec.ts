import {FileManager} from './FileManager';
import {FileService} from './FileService';
describe('FileManager', () => {
  const postManager = new FileManager();
  const images = new FileService(FileService.CATEGORY_IMAGES, []);
  const video = new FileService(FileService.CATEGORY_VIDEO, []);
  const audio = new FileService(FileService.CATEGORY_AUDIT, []);
  postManager.set([images, video]);
  it('Should return undefined', () => {
    expect(postManager.get('')).toBe(undefined);
    expect(postManager.get('test')).toBe(undefined);
    expect(postManager.get('any')).toBe(undefined);
    expect(postManager.get(FileService.CATEGORY_AUDIT)).toBe(undefined);
  });
  it('Should return images', () => {
    expect(postManager.get(FileService.CATEGORY_IMAGES)).toBe(images);
  });
  it('Should return video', () => {
    expect(postManager.get(FileService.CATEGORY_VIDEO)).toBe(video);
  });
  it('Should return audio', () => {
    postManager.add(audio);
    expect(postManager.get(FileService.CATEGORY_AUDIT)).toBe(audio);
  });
});
