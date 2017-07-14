import {InfoServiceHttpFactory} from 'models/Info/Factories/InfoServiceHttpFactory';
import {InfoServiceHttp} from '../InfoService/InfoServiceHttp';
describe('InfoServiceHttpFactory', () => {
  const factory = new InfoServiceHttpFactory();
  describe('UsernameInfoFetchModel', () => {
    const service = factory.getInfoService(InfoServiceHttpFactory.CATEGORY_USERNAME, 100);
    it ('Should return serviceName "USERNAME"', () => {
      expect(service.getName()).toBe(InfoServiceHttpFactory.CATEGORY_USERNAME);
    })
    it ('Should return url "/info/get/100/name.json"', () => {
      let url: String;
      if (service instanceof InfoServiceHttp) {
        url = service.getUrl();
      }
      expect(url).toBe('/info/get/100/name.json');
    })
  });
  describe('UsernameInfoFetchModel', () => {
    const service = factory.getInfoService(InfoServiceHttpFactory.CATEGORY_EMAIL, 102);
    it ('Should return serviceName "EMAIL"', () => {
      expect(service.getName()).toBe(InfoServiceHttpFactory.CATEGORY_EMAIL);
    })
    it ('Should return url "/info/get/102/email.json"', () => {
      let url: String;
      if (service instanceof InfoServiceHttp) {
        url = service.getUrl();
      }
      expect(url).toBe('/info/get/102/email.json');
    })
  });
  describe('UsernameInfoFetchModel', () => {
    const service = factory.getInfoService(InfoServiceHttpFactory.CATEGORY_WEBSITE, 103);
    it ('Should return serviceName "WEB"', () => {
      expect(service.getName()).toBe(InfoServiceHttpFactory.CATEGORY_WEBSITE);
    })
    it ('Should return url "/info/get/103/web.json"', () => {
      let url: String;
      if (service instanceof InfoServiceHttp) {
        url = service.getUrl();
      }
      expect(url).toBe('/info/get/103/web.json');
    })
  });
});
