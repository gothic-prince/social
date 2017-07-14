import {InfoServiceHttpFactory} from 'models/Info/Factories/InfoServiceHttpFactory';
import {InfoServiceHttp} from '../InfoService/InfoServiceHttp';
import {StorageEntitiesInfo} from '../Storage/StorageEntitiesInfo';
describe('InfoServiceHttpFactory', () => {
  const factory = new InfoServiceHttpFactory();
  const storage = new StorageEntitiesInfo();
  describe('UsernameInfoFetchModel', () => {
    const service = factory.getInfoService(InfoServiceHttpFactory.CATEGORY_USERNAME, 100, storage);
    it ('Should return serviceName "USERNAME"', () => {
      expect(service.getName()).toBe(InfoServiceHttpFactory.CATEGORY_USERNAME);
    });
    it ('Should return url "/info/get/100/name.json"', () => {
      let url: String;
      if (service instanceof InfoServiceHttp) {
        url = service.getUrl();
      }
      expect(url).toBe('/info/get/100/name.json');
    });
  });
  describe('EmailInfoFetchModel', () => {
    const service = factory.getInfoService(InfoServiceHttpFactory.CATEGORY_EMAIL, 102, storage);
    it ('Should return serviceName "EMAIL"', () => {
      expect(service.getName()).toBe(InfoServiceHttpFactory.CATEGORY_EMAIL);
    });
    it ('Should return url "/info/get/102/email.json"', () => {
      let url: String;
      if (service instanceof InfoServiceHttp) {
        url = service.getUrl();
      }
      expect(url).toBe('/info/get/102/email.json');
    })
  });
  describe('WebInfoFetchModel', () => {
    const service = factory.getInfoService(InfoServiceHttpFactory.CATEGORY_WEBSITE, 103, storage);
    it ('Should return serviceName "WEB"', () => {
      expect(service.getName()).toBe(InfoServiceHttpFactory.CATEGORY_WEBSITE);
    });
    it ('Should return url "/info/get/103/web.json"', () => {
      let url: String;
      if (service instanceof InfoServiceHttp) {
        url = service.getUrl();
      }
      expect(url).toBe('/info/get/103/web.json');
    });
  });
});
