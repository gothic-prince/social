import {InfoServiceInterface} from './InfoServiceInterface';
import {InfoEntityInterface} from '../Entities/InfoEntityInterface';
import {StorageEntitiesInfo} from '../../StorageEntities/StorageEntitiesInfo';
export class InfoService implements InfoServiceInterface {
  static CATEGORY_USERNAME = 'USERNAME';
  static CATEGORY_AGE = 'AGE';
  static CATEGORY_ABOUT = 'ABOUT';
  static CATEGORY_WEBSITE = 'WEBSITE';
  static CATEGORY_PHONE = 'PHONE';
  static CATEGORY_EMAIL = 'EMAIL';
  private serviceName: String;
  private info: InfoEntityInterface;
  protected storage: StorageEntitiesInfo = new StorageEntitiesInfo();
  constructor(serviceName: String, info: InfoEntityInterface) {
    this.serviceName = serviceName;
    this.info = info;
  }
  getName(): String {
    return this.serviceName;
  }
  getInfo(): InfoEntityInterface {
    return this.info;
  }
  setInfo(info: InfoEntityInterface) {
    return this.info = info;
  }
}
