import {FetchModelAbstract} from '../../Fetch/FetchModelAbstract';
export class CurrentUserFetchModel extends FetchModelAbstract {
  public getUrlAll(): string {
    return '/users/current.json';
  }
  public getUrlOne(): string {
    return null;
  }
  public getUrlAdd(): string {
    return null;
  }
  public getUrlRemove(): string {
    return null;
  }
  public getUrlUpdate(): string {
    return '/users/update/current.json';
  }
}
