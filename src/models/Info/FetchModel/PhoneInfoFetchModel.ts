import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class PhoneInfoFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/info/all/' + this.id + '/phone.json';
  }
  public getUrlOne(): string {
    return '/info/get/' + this.id + '/phone.json';
  }
  public getUrlAdd(): string {
    return '/info/add/' + this.id + '/phone.json';
  }
  public getUrlRemove(): string {
    return '/info/remove/' + this.id + '/phone.json';
  }
  public getUrlUpdate(): string {
    return '/info/update/' + this.id + '/phone.json';
  }
}
