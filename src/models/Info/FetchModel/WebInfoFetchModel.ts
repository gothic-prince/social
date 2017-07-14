import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class WebInfoFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/info/add/' + this.id + '/web.json';
  }
  public getUrlOne(): string {
    return '/info/get/' + this.id + '/web.json';
  }
  public getUrlAdd(): string {
    return '/info/add/' + this.id + '/web.json';
  }
  public getUrlRemove(): string {
    return '/info/remove/' + this.id + '/web.json';
  }
  public getUrlUpdate(): string {
    return '/info/update/' + this.id + '/web.json';
  }
}
