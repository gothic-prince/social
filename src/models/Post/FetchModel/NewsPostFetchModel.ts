import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class NewsPostFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(postId: Number) {
    super();
    this.id = postId;
  }
  public getUrlAll(): string {
    return '/users/posts/' + this.id + '/news.json';
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
