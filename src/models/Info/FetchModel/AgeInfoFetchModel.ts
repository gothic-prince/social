import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class AgeInfoFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/info/all/' + this.id + '/age.json';
  }
  public getUrlAdd(): string {
    return '/info/add/' + this.id + '/age.json';
  }
  public getUrlRemove(): string {
    return '/info/remove/' + this.id + '/age.json';
  }
  public getUrlUpdate(): string {
    return '/info/update/' + this.id + '/age.json';
  }
  public getUrlOne(): string {
    return '/info/get/' + this.id + '/age.json';
  }
}
