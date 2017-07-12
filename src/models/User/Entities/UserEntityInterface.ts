import {UserManagerInterface} from '../UserManager/UserManagerInterface';
import {InfoManagerInterface} from '../../Info/InfoManager/InfoManagerInterface';
import {PostManagerInterface} from '../../Post/PostManager/PostManagerInterface';

export interface UserEntityInterface {
  getUserManager(): UserManagerInterface;
  getInfoManager(): InfoManagerInterface;
  getPostManager (): PostManagerInterface;
  getId (): Number;
}
