import {InfoServiceHttp} from './InfoServiceHttp';
import {UsernameInfoFetchModel} from '../FetchModel/UsernameInfoFetchModel';
import {AgeInfoFetchModel} from '../FetchModel/AgeInfoFetchModel';
import {WebInfoFetchModel} from '../FetchModel/WebInfoFetchModel';
import {PhoneInfoFetchModel} from 'models/Info/FetchModel/PhoneInfoFetchModel';
import {AboutInfoFetchModel} from 'models/Info/FetchModel/AboutInfoFetchModel';
import {StorageEntitiesInfo} from '../Storage/StorageEntitiesInfo';
describe('InfoServiceHttp', () => {
  const storage = new StorageEntitiesInfo();
  it('Should return service: USERNAME', (done) => {
    const service = new InfoServiceHttp(InfoServiceHttp.CATEGORY_USERNAME, new UsernameInfoFetchModel(100), storage);
    service.get(() => {
      expect(service.getName()).toBe(InfoServiceHttp.CATEGORY_USERNAME);
      expect(service.getInfo().getId()).toBe(100003);
      expect(service.getInfo().getUserId()).toBe(100);
      expect(service.getInfo().getLast()).toBe('Alex');
      done();
    });
  });
  it('Should return service: AGE', (done) => {
    const service = new InfoServiceHttp(InfoServiceHttp.CATEGORY_AGE, new AgeInfoFetchModel(103), storage);
    service.get(() => {
      expect(service.getName()).toBe(InfoServiceHttp.CATEGORY_AGE);
      expect(service.getInfo().getId()).toBe(100013);
      expect(service.getInfo().getUserId()).toBe(103);
      expect(service.getInfo().getData()[0]).toBe('23');
      expect(service.getInfo().getData()[1]).toBe('3');
      expect(service.getInfo().getData()[2]).toBe('1993');
      done();
    });
  });
  it('Should return service: WEB', (done) => {
    const service = new InfoServiceHttp(InfoServiceHttp.CATEGORY_WEBSITE, new WebInfoFetchModel(103), storage);
    service.get(() => {
      expect(service.getName()).toBe(InfoServiceHttp.CATEGORY_WEBSITE);
      expect(service.getInfo().getId()).toBe(100017);
      expect(service.getInfo().getUserId()).toBe(103);
      expect(service.getInfo().getLast()).toBe('www.monika-club-fan.org');
      done();
    });
  });
  it('Should return service: PHONE', (done) => {
    const service = new InfoServiceHttp(InfoServiceHttp.CATEGORY_PHONE, new PhoneInfoFetchModel(102), storage);
    service.get(() => {
      expect(service.getName()).toBe(InfoServiceHttp.CATEGORY_PHONE);
      expect(service.getInfo().getId()).toBe(100010);
      expect(service.getInfo().getUserId()).toBe(102);
      expect(service.getInfo().getLast()).toBe('2.315.283.101');
      done();
    });
  });
  it('Should return service: ABOUT', (done) => {
    const service = new InfoServiceHttp(InfoServiceHttp.CATEGORY_PHONE, new AboutInfoFetchModel(103), storage);
    service.get(() => {
      expect(service.getName()).toBe(InfoServiceHttp.CATEGORY_PHONE);
      expect(service.getInfo().getId()).toBe(100012);
      expect(service.getInfo().getUserId()).toBe(103);
      expect(service.getInfo().getLast()).toBe('Any text');
      done();
    });
  });
});
