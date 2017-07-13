import {UserService} from './UserService';
import {UserEntity} from '../Entities/UserEntity';
import {UserManager} from '../UserManager/UserManager';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {PostManager} from '../../Post/PostManager/PostManager';
import {UserEntityInterface} from '../Entities/UserEntityInterface';
export class UserServiceHttp extends UserService {
  protected fetched = false;
  protected url: string;
  protected success = () => {};
  protected error = (message: String) => {};
  constructor(serviceName: String, url: string, success = () => {}, error = (message: String) => {}) {
    super(serviceName, []);
    this.success = success;
    this.error = error;
    this.url = url;
  }
  public getUrl () {
    return this.url;
  }
  public fetch () {
    try {
      fetch(this.getUrl()).then((data) => {
        data.json().then((users) => {
          this.setUsers(this.jsonToObject(users));
          this.success();
          this.fetched = true;
        }).catch(() => {
          this.error('ERROR: JsonParse');
          this.fetched = true;
        })
      }).catch(() => {
        this.error('ERROR: NotFound');
        this.fetched = true;
      });
    } catch (e) {
      this.error('ERROR: SYS: ' + e.message);
    }
  }
  protected jsonToObject (users): UserEntityInterface[] {
    return users.map((userData) => {
      const id: Number = userData.id;
      if (UserServiceHttp.getFromStore(id) === null) {
        UserServiceHttp.addToStore(
          new UserEntity(new UserManager(), new InfoManager(), new PostManager(), id)
        );
      }
      return UserServiceHttp.getFromStore(id);
    });
  }
}
