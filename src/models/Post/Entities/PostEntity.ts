import {PostEntityInterface} from './PostEntityInterface';
import {InfoManagerInterface} from '../../Info/InfoManager/InfoManagerInterface';
import {FileManagerInterface} from '../../File/FileManager/FileManagerInterface';
import {PostManagerInterface} from '../PostManager/PostManagerInterface';
import {UserManagerInterface} from '../../User/UserManager/UserManagerInterface';
export class PostEntity implements PostEntityInterface {
  private date: Date;
  private id: Number = 0;
  private info: InfoManagerInterface;
  private file: FileManagerInterface;
  private post: PostManagerInterface;
  private user: UserManagerInterface;
  constructor
  (date: Date, id: Number, info: InfoManagerInterface, file: FileManagerInterface, post: PostManagerInterface, user: UserManagerInterface) {
    this.date = date;
    this.id = id;
    this.info = info;
    this.file = file;
    this.post = post;
    this.user = user;
  }
  getDate(): Date {
    return this.date;
  }
  getInfoManager(): InfoManagerInterface {
    return this.info;
  }
  getFileManager(): FileManagerInterface {
    return this.file;
  }
  getPostManager(): PostManagerInterface {
    return this.post;
  }
  getUserManager(): UserManagerInterface {
    return this.user;
  }
  getId(): Number {
    return this.id;
  }
}
