import {UserService} from './UserService';
import {UserEntity} from '../Entities/UserEntity';
import {UserManager} from '../UserManager/UserManager';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {PostManager} from '../../Post/PostManager/PostManager';
import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
export class UserServiceHttp extends UserService {
  protected fetchModel: FetchModelInterface;
  constructor(serviceName: String, fetchModel: FetchModelInterface) {
    super(serviceName, []);
    this.fetchModel = fetchModel;
  }
  public getUrl () {
    return this.fetchModel.getUrlAll();
  }
  public fetch (succesFunc) {
    this.fetchModel.all((entities) => {
      this.jsonToObject(entities);
      succesFunc();
    });
  }
  protected jsonToObject (users) {
    this.setUsers(
      users.map((userData) => {
        const id: Number = userData.id;
        return this.storage.add(id, new UserEntity(new UserManager(), new InfoManager(), new PostManager(), id));
      })
    );
  }
}
