import {FetchModelFactoryInterface} from './FetchModelFactoryInterface';
import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {InfoServiceHttpFactory} from './InfoServiceHttpFactory';
import {UsernameInfoFetchModel} from '../FetchModel/UsernameInfoFetchModel';
import {AgeInfoFetchModel} from '../FetchModel/AgeInfoFetchModel';
import {AboutInfoFetchModel} from '../FetchModel/AboutInfoFetchModel';
import {WebInfoFetchModel} from '../FetchModel/WebInfoFetchModel';
import {PhoneInfoFetchModel} from '../FetchModel/PhoneInfoFetchModel';
import {EmailInfoFetchModel} from '../FetchModel/EmailInfoFetchModel';
import {TSMap} from 'typescript-map';
export class InfoFetchModelFactory implements FetchModelFactoryInterface {
  protected static models: TSMap <String, FetchModelInterface> = null;
  protected static getMap (): TSMap <String, FetchModelInterface> {
    if (InfoFetchModelFactory.models === null) {
      InfoFetchModelFactory.models = new TSMap <String, FetchModelInterface>();
      InfoFetchModelFactory.models.set(InfoServiceHttpFactory.CATEGORY_USERNAME, new UsernameInfoFetchModel(null));
      InfoFetchModelFactory.models.set(InfoServiceHttpFactory.CATEGORY_AGE, new AgeInfoFetchModel(null));
      InfoFetchModelFactory.models.set(InfoServiceHttpFactory.CATEGORY_ABOUT, new AboutInfoFetchModel(null));
      InfoFetchModelFactory.models.set(InfoServiceHttpFactory.CATEGORY_WEBSITE, new WebInfoFetchModel(null));
      InfoFetchModelFactory.models.set(InfoServiceHttpFactory.CATEGORY_PHONE, new PhoneInfoFetchModel(null));
      InfoFetchModelFactory.models.set(InfoServiceHttpFactory.CATEGORY_EMAIL, new EmailInfoFetchModel(null));
    }
    return InfoFetchModelFactory.models;
  }
  get(serviceName: String, id: Number): FetchModelInterface {
    return Object.assign(InfoFetchModelFactory.getMap().get(serviceName), {id: id});
  }
}
