import {InfoManagerInterface} from '../../Info/InfoManagerInterface';
import {UserManagerInterface} from '../UserManagerInterface';
import {ImageManagerInterface} from '../../Image/ImageManagerInterface';

export interface UserEntityInterface {
  getUserManager(): UserManagerInterface;
  getInfoManager(): InfoManagerInterface;
  getImageManager (): ImageManagerInterface;
  getId (): number;
}
