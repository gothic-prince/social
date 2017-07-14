import {InfoServiceFactoryInterface} from './InfoServiceFactoryInterface';
import {InfoServiceInterface} from '../InfoService/InfoServiceInterface';
import {InfoServiceHttp} from '../InfoService/InfoServiceHttp';
import {InfoFetchModelFactory} from 'models/Info/Factories/InfoFetchModelFactory';

export class InfoServiceHttpFactory implements InfoServiceFactoryInterface {
  static CATEGORY_USERNAME = 'USERNAME';
  static CATEGORY_AGE = 'AGE';
  static CATEGORY_ABOUT = 'ABOUT';
  static CATEGORY_WEBSITE = 'WEBSITE';
  static CATEGORY_PHONE = 'PHONE';
  static CATEGORY_EMAIL = 'EMAIL';
  getInfoService(serviceName: String, id: Number): InfoServiceInterface {
    return new InfoServiceHttp(serviceName, (new InfoFetchModelFactory()).get(serviceName, id));
  }
}
