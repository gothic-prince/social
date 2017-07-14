import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class LikedUserFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/users/find/' + this.id + '/likes.json';
  }
  public getUrlOne(): string {
    return '/users/get/' + this.id + '/likes.json';
  }
  public getUrlAdd(): string {
    return '/users/add/like.json';
  }
  public getUrlRemove(): string {
    return '/users/remove/like.json';
  }
  public getUrlUpdate(): string {
    return '/users/update/like.json';
  }
}
