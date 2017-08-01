import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class CommentsPostFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(postId: Number) {
    super();
    this.id = postId;
  }
  public getUrlAll(): string {
    return '/users/find/' + this.id + '/comments.json';
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
