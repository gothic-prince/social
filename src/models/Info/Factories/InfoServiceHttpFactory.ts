import {InfoServiceFactoryInterface} from './InfoServiceFactoryInterface';
import {InfoServiceInterface} from '../InfoService/InfoServiceInterface';
import {InfoServiceHttp} from '../InfoService/InfoServiceHttp';
import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {UsernameInfoFetchModel} from '../FetchModel/UsernameInfoFetchModel';
import {AgeInfoFetchModel} from '../FetchModel/AgeInfoFetchModel';
import {EmailInfoFetchModel} from 'models/Info/FetchModel/EmailInfoFetchModel';
import {PhoneInfoFetchModel} from '../FetchModel/PhoneInfoFetchModel';
import {WebInfoFetchModel} from '../FetchModel/WebInfoFetchModel';
import {AboutInfoFetchModel} from 'models/Info/FetchModel/AboutInfoFetchModel';

export class InfoServiceHttpFactory implements InfoServiceFactoryInterface {
  static CATEGORY_USERNAME = 'USERNAME';
  static CATEGORY_AGE = 'AGE';
  static CATEGORY_ABOUT = 'ABOUT';
  static CATEGORY_WEBSITE = 'WEBSITE';
  static CATEGORY_PHONE = 'PHONE';
  static CATEGORY_EMAIL = 'EMAIL';
  getInfoService(serviceName: String, id: Number): InfoServiceInterface {
    let fetchModel: FetchModelInterface;
    switch (serviceName) {
      case InfoServiceHttpFactory.CATEGORY_USERNAME:
        fetchModel = new UsernameInfoFetchModel(id);
        break;
      case InfoServiceHttpFactory.CATEGORY_AGE:
        fetchModel = new AgeInfoFetchModel(id);
        break;
      case InfoServiceHttpFactory.CATEGORY_ABOUT:
        fetchModel = new AboutInfoFetchModel(id);
        break;
      case InfoServiceHttpFactory.CATEGORY_WEBSITE:
        fetchModel = new WebInfoFetchModel(id);
        break;
      case InfoServiceHttpFactory.CATEGORY_PHONE:
        fetchModel = new PhoneInfoFetchModel(id);
        break;
      case InfoServiceHttpFactory.CATEGORY_EMAIL:
        fetchModel = new EmailInfoFetchModel(id);
        break;
    }
    return new InfoServiceHttp(serviceName, fetchModel);
  }
}
