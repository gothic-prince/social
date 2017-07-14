import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class FriendsUserFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/users/find/' + this.id + '/friends.json';
  }
  public getUrlOne(): string {
    return '/users/get/' + this.id + '/friends.json';
  }
  public getUrlAdd(): string {
    return '/users/add/friend.json';
  }
  public getUrlRemove(): string {
    return '/users/remove/friend.json';
  }
  public getUrlUpdate(): string {
    return '/users/update/friend.json';
  }
}
