import {FileService} from './FileService';
import {FileEntity} from './Entities/FileEntity';
import {FileEntityInterface} from './Entities/FileEntityInterface';
describe('FileService', () => {
  const service = new FileService(FileService.CATEGORY_IMAGES, []);
  it('Should return image category', () => {
    expect(service.getName()).toBe(FileService.CATEGORY_IMAGES);
  });
  it ('Should return 0 posts', () => {
    expect(service.all().length).toBe(0);
  });
  it ('Should return 4 posts', () => {
    const images = [
      '/public/images/world.jpg',
      '/public/images/animals.jpg',
      '/public/images/people.jpg',
      '/public/images/home.jpg'
    ];
    images.map((image) => {
      service.add(new FileEntity('', image));
    });
    expect(service.all().length).toBe(4);
    service.all().map((file: FileEntityInterface, index) => {
      expect(file.getUrl()).toBe(images[index]);
    });
  });
  it ('Should return 3 posts', () => {
    const images = [
      '/public/images/world.jpg',
      '/public/images/animals.jpg',
      '/public/images/home.jpg'
    ];
    service.remove(service.all()[2]);
    expect(service.all().length).toBe(3);
    service.all().map((file: FileEntityInterface, index) => {
      expect(file.getUrl()).toBe(images[index]);
    });
  });
});
