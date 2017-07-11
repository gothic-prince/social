import {InfoManagerInterface} from '../../Info/InfoManagerInterface';
import {UserManagerInterface} from '../UserManagerInterface';
import {PostManagerInterface} from '../../Post/PostManagerInterface';

export interface UserEntityInterface {
  getUserManager(): UserManagerInterface;
  getInfoManager(): InfoManagerInterface;
  getPostManager (): PostManagerInterface;
  getId (): Number;
}
