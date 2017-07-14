import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class UsernameInfoFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/info/all/' + this.id + '/name.json';
  }
  public getUrlOne(): string {
    return '/info/get/' + this.id + '/name.json';
  }
  public getUrlAdd(): string {
    return '/info/add/' + this.id + '/name.json';
  }
  public getUrlRemove(): string {
    return '/info/remove/' + this.id + '/name.json';
  }
  public getUrlUpdate(): string {
    return '/info/update/' + this.id + '/name.json';
  }
}
