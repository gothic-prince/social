import {InfoManager} from './InfoManager';
import {InfoService} from './InfoService';
import {InfoEntity} from './Entities/InfoEntity';
describe('InfoManager', () => {
  const infoManager = new InfoManager();
  const phone = new InfoService(
    InfoService.CATEGORY_PHONE, new InfoEntity(['2.394.172.940'], new Date())
  );
  const about = new InfoService(
    InfoService.CATEGORY_ABOUT, new InfoEntity(['any story', 'store was edited'], new Date())
  );
  const email = new InfoService(
    InfoService.CATEGORY_EMAIL, new InfoEntity(['', 'alex@gmail.com', 'admin@mysite.org'], new Date())
  );
  infoManager.set([about, phone, email]);
  it('should return undefined', () => {
    expect(infoManager.get(InfoService.CATEGORY_AGE)).toBe(undefined);
    expect(infoManager.get('test')).toBe(undefined);
    expect(infoManager.get('any')).toBe(undefined);
  });
  describe('Service: phone', () => {
    it('should return instance of InfoServiceInterface', () => {
      expect(infoManager.get(InfoService.CATEGORY_PHONE)).toBe(phone);
    });
    it('should return "2.394.172.940"', () => {
      expect(infoManager.get(InfoService.CATEGORY_PHONE).getInfo().getLast()).toBe('2.394.172.940');
    });
  })
  describe('Service: about', () => {
    it('should return instance of InfoServiceInterface', () => {
      expect(infoManager.get(InfoService.CATEGORY_ABOUT)).toBe(about);
    });
    it('should return "store was edited"', () => {
      expect(infoManager.get(InfoService.CATEGORY_ABOUT).getInfo().getLast()).toBe('store was edited');
    });
  })
  describe('Service: email', () => {
    it('should return instance of InfoServiceInterface', () => {
      expect(infoManager.get(InfoService.CATEGORY_EMAIL)).toBe(email);
    });
    it('should return "admin@mysite.org"', () => {
      expect(infoManager.get(InfoService.CATEGORY_EMAIL).getInfo().getLast()).toBe('admin@mysite.org');
    });
  })
});
