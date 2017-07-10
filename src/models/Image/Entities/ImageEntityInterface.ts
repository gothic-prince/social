import {PostManagerInterface} from '../../Post/PostManagerInterface';
import {UserManagerInterface} from '../../User/UserManagerInterface';
import {FileEntityInterface} from '../../File/Entities/FileEntityInterface';

export interface ImageEntityInterface {
  getFile(): FileEntityInterface;
  getPostManager (): PostManagerInterface;
  getUserManager (): UserManagerInterface;
}
