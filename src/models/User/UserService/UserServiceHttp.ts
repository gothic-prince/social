import {UserService} from './UserService';
import {UserEntity} from '../Entities/UserEntity';
import {UserManager} from '../UserManager/UserManager';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {PostManager} from '../../Post/PostManager/PostManager';
import {UserEntityInterface} from '../Entities/UserEntityInterface';
export class UserServiceHttp extends UserService {
  protected fetched = false;
  constructor(serviceName: String, url: string, success = () => {}, error = (message: String) => {}) {
    super(serviceName, []);
    this.fetch(url, success, error);
  }
  protected fetch (url, success = () => {}, error = (message: String) => {}) {
    try {
      fetch(url).then((data) => {
        data.json().then((users) => {
          this.setUsers(this.jsonToObject(users));
          success();
        }).catch(() => {
          error('ERROR: JsonParse')
        })
      }).catch(() => {
        error('ERROR: NotFound')
      });
    } catch (e) {
      error(e.message);
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
