import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class AboutInfoFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/info/all/' + this.id + '/about.json';
  }
  public getUrlAdd(): string {
    return '/info/add/' + this.id + '/about.json';
  }
  public getUrlRemove(): string {
    return '/info/remove/' + this.id + '/about.json';
  }
  public getUrlUpdate(): string {
    return '/info/update/' + this.id + '/about.json';
  }
  public getUrlOne(): string {
    return '/info/get/' + this.id + '/about.json';
  }
}
