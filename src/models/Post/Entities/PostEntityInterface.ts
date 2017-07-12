import {InfoManagerInterface} from '../../Info/InfoManager/InfoManagerInterface';
import {FileManagerInterface} from '../../File/FileManager/FileManagerInterface';
import {PostManagerInterface} from '../PostManager/PostManagerInterface';
import {UserManagerInterface} from '../../User/UserManager/UserManagerInterface';
export interface PostEntityInterface {
  getDate (): Date;
  /**
   * Should be returned InfoManagerInterface, which has services with title and description
   */
  getInfoManager (): InfoManagerInterface;
  /**
   * Should be returned FileManagerInterface, which has services with image, video, audio ect
   */
  getFileManager (): FileManagerInterface;
  /**
   * Should be returned PostManagerInterface, which has quote, comments, repost or copy message
   */
  getPostManager (): PostManagerInterface;
  /**
   * Should be returned UserManagerInterface, which has author, group
   */
  getUserManager (): UserManagerInterface;
  getId (): Number;
}
