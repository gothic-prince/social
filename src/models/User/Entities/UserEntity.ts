import {UserEntityInterface} from './UserEntityInterface';
import {UserManagerInterface} from '../UserManagerInterface';
import {InfoManagerInterface} from '../../Info/InfoManagerInterface';
import {PostManagerInterface} from '../../Post/PostManagerInterface';

export class UserEntity implements UserEntityInterface {
  private user: UserManagerInterface;
  private info: InfoManagerInterface;
  private post: PostManagerInterface;
  private id: Number = 0;
  constructor(user: UserManagerInterface, info: InfoManagerInterface, post: PostManagerInterface, id: Number) {
    this.user = user;
    this.info = info;
    this.post = post;
    this.id = id;
  }
  getPostManager(): PostManagerInterface {
    return this.post;
  }
  getUserManager(): UserManagerInterface {
    return this.user;
  }
  getInfoManager(): InfoManagerInterface {
    return this.info;
  }
  getId(): Number {
    return this.id;
  }
}
