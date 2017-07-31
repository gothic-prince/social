import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class ConferencePostFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(userId: Number) {
    super();
    this.id = userId;
  }
  public getUrlAll(): string {
    return '/users/posts/' + this.id + '/conferences.json';
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
