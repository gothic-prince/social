import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class EmailInfoFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/info/all/' + this.id + '/email.json';
  }
  public getUrlAdd(): string {
    return '/info/add/' + this.id + '/email.json';
  }
  public getUrlRemove(): string {
    return '/info/remove/' + this.id + '/email.json';
  }
  public getUrlUpdate(): string {
    return '/info/update/' + this.id + '/email.json';
  }
  public getUrlOne(): string {
    return '/info/get/' + this.id + '/email.json';
  }
}
