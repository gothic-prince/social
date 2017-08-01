import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class AvaPostFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(postId: Number) {
    super();
    this.id = postId;
  }
  public getUrlAll(): string {
    return '/users/find/' + this.id + '/ava.json';
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
