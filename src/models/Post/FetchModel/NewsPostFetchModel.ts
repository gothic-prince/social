import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class NewsPostFetchModel extends FetchModelAbstract {
  protected postId: Number;
  constructor(postId: Number) {
    super();
    this.postId = postId;
  }
  public getUrlAll(): string {
    return '/users/posts/' + this.postId + '/news.json';
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
