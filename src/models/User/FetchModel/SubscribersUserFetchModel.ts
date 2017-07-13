import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class SubscribersUserFetchModel extends FetchModelAbstract {
  protected id: Number;
  constructor(id: Number) {
    super();
    this.id = id;
  }
  public getUrlAll(): string {
    return '/users/find/' + this.id + '/subscribers.json';
  }
  public getUrlAdd(): string {
    return '/users/add/subscriber.json';
  }
  public getUrlRemove(): string {
    return '/users/remove/subscriber.json';
  }
  public getUrlUpdate(): string {
    return '/users/update/subscriber.json';
  }
}
