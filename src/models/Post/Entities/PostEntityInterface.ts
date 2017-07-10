import {FileManagerInterface} from '../../File/FileManagerInterface';
import {InfoManagerInterface} from '../../Info/InfoManagerInterface';
import {PostManagerInterface} from '../PostManagerInterface';

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
   * Should be returned PostManagerInterface, which has quote, repost or copy message
   */
  getPostManager (): PostManagerInterface;
  getId (): Number;
}
