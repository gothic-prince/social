import {InfoServiceInterface} from './InfoServiceInterface';
export class InfoService implements InfoServiceInterface {
  static CATEGORY_USERNAME = 'USERNAME';
  static CATEGORY_AGE = 'AGE';
  static CATEGORY_ABOUT = 'ABOUT';
  static CATEGORY_WEBSITE = 'WEBSITE';
  static CATEGORY_PHONE = 'PHONE';
  static CATEGORY_EMAIL = 'EMAIL';
  private serviceName: String;
  private info: String[] = [];
  constructor(serviceName: String, info: String[]) {
    this.serviceName = serviceName;
    this.info = info;
  }
  getName(): String {
    return this.serviceName;
  }
  getInfo(): String[] {
    return this.info;
  }
}
