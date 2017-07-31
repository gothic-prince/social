import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class ConferencePostFetchModel extends FetchModelAbstract {
  protected userId: Number;
  constructor(userId: Number) {
    super();
    this.userId = userId;
  }
  public getUrlAll(): string {
    return '/users/posts/' + this.userId + '/conferences.json';
  }
  public getUrlAdd(): string {
    return '';
  }
  public getUrlRemove(): string {
    return '';
  }
  public getUrlUpdate(): string {
    return '';
  }
  public getUrlOne(): string {
    return '';
  }
}
