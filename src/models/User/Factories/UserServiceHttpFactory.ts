import {UserServiceInterface} from '../UserService/UserServiceInterface';
import {UserServiceHttp} from '../UserService/UserServiceHttp';
import {UserServiceHttpFactoryInterface} from './UserServiceHttpFactoryInterface';
export class UserServiceHttpFactory implements UserServiceHttpFactoryInterface {
  static CATEGORY_CURRENT = 'CURRENT';
  static CATEGORY_FRIENDS = 'FRIENDS';
  static CATEGORY_SUBSCRIBERS = 'SUBSCRIBERS';
  static CATEGORY_LIKES = 'LIKES';
  static CATEGORY_BLACKLIST = 'BLACKLIST';
  getUserService(serviceName: String, id: Number): UserServiceInterface {
    let url: string;
    switch (serviceName) {
      case UserServiceHttpFactory.CATEGORY_CURRENT:
        url = '/users/current.json';
        break;
      case UserServiceHttpFactory.CATEGORY_FRIENDS:
        url = '/users/find/' + id + '/friends.json';
        break;
      case UserServiceHttpFactory.CATEGORY_SUBSCRIBERS:
        url = '/users/find/' + id + '/subscribers.json';
        break;
      case UserServiceHttpFactory.CATEGORY_LIKES:
        const postId = id
        url = '/users/find/' + postId + '/likes.json';
        break;
      case UserServiceHttpFactory.CATEGORY_BLACKLIST:
        url = '/users/find/' + id + '/blacklist.json';
        break;
      default:
        return null;
    }
    return new UserServiceHttp(serviceName, url, this.getSuccessFunc(), this.getErrorFunc());
  }
  getSuccessFunc(): any {
    return () => {};
  }
  getErrorFunc(): any {
    return (message: String) => {};
  }
}
