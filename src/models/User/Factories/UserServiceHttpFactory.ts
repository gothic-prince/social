import {UserServiceInterface} from '../UserService/UserServiceInterface';
import {UserServiceHttp} from '../UserService/UserServiceHttp';
import {UserServiceHttpFactoryInterface} from './UserServiceHttpFactoryInterface';
import {BlockedUserFetchModel} from '../FetchModel/BlockedUserFetchModel';
import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {CurrentUserFetchModel} from '../FetchModel/CurrentUserFetchModel';
import {FriendsUserFetchModel} from '../FetchModel/FriendsUserFetchModel';
import {LikedUserFetchModel} from '../FetchModel/LikedUserFetchModel';
import {SubscribersUserFetchModel} from '../FetchModel/SubscribersUserFetchModel';
import {StorageEntitiesUser} from '../Storage/StorageEntitiesUser';
export class UserServiceHttpFactory implements UserServiceHttpFactoryInterface {
  static CATEGORY_CURRENT = 'CURRENT';
  static CATEGORY_FRIENDS = 'FRIENDS';
  static CATEGORY_SUBSCRIBERS = 'SUBSCRIBERS';
  static CATEGORY_LIKES = 'LIKES';
  static CATEGORY_BLACKLIST = 'BLACKLIST';
  getUserService(serviceName: String, id: Number, storage: StorageEntitiesUser): UserServiceInterface {
    let fetchModel: FetchModelInterface;
    switch (serviceName) {
      case UserServiceHttpFactory.CATEGORY_CURRENT:
        fetchModel = new CurrentUserFetchModel();
        break;
      case UserServiceHttpFactory.CATEGORY_FRIENDS:
        fetchModel = new FriendsUserFetchModel(id);
        break;
      case UserServiceHttpFactory.CATEGORY_SUBSCRIBERS:
        fetchModel = new SubscribersUserFetchModel(id);
        break;
      case UserServiceHttpFactory.CATEGORY_LIKES:
        const postId = id
        fetchModel = new LikedUserFetchModel(id);
        break;
      case UserServiceHttpFactory.CATEGORY_BLACKLIST:
        fetchModel = new BlockedUserFetchModel(id);
        break;
      default:
        return null;
    }
    return new UserServiceHttp(serviceName, fetchModel, storage);
  }
  getSuccessFunc(): any {
    return () => {};
  }
  getErrorFunc(): any {
    return (message: String) => {};
  }
}
