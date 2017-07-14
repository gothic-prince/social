import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class BlockedUserFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/users/find/' + this.id + '/blacklist.json';
  }
  public getUrlOne(): string {
    return '/users/get/' + this.id + '/blacklist.json';
  }
  public getUrlAdd(): string {
    return '/users/add/blacklist.json';
  }
  public getUrlRemove(): string {
    return '/users/remove/blacklist.json';
  }
  public getUrlUpdate(): string {
    return '/users/update/blacklist.json';
  }
}
