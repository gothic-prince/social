import {FileEntity} from './FileEntity';
describe('FileEntity', () => {
  const entity = new FileEntity();
  it ('Should return empty dir', () => {
    expect(entity.getDir()).toBe('');
  });
  it ('Should return empty url', () => {
    expect(entity.getUrl()).toBe('');
  });
  it ('Should return "/home/alex/any-app/images/ava.png"', () => {
    entity.setDir('/home/alex/any-app/images/ava.png');
    expect(entity.getDir()).toBe('/home/alex/any-app/images/ava.png');
  });
  it ('Should return "https://www.mysite.org/public/images/ava.png"', () => {
    entity.setUrl('https://www.mysite.org/public/images/ava.png');
    expect(entity.getUrl()).toBe('https://www.mysite.org/public/images/ava.png');
  });
});
