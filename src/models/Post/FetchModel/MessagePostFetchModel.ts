import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class MessagePostFetchModel extends FetchModelAbstract {
  protected postId: Number;
  constructor(postId: Number) {
    super();
    this.postId = postId;
  }
  public getUrlAll(): string {
    return '';
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
    return '/posts/get/' + this.postId + '.json';
  }
}
