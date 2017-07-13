import {PostManager} from '../../Post/PostManager/PostManager';
import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {InfoService} from './InfoService';
import {InfoEntity} from '../Entities/InfoEntity';
export class UserServiceHttp extends InfoService {
  protected fetchModel: FetchModelInterface;
  constructor(serviceName: String, fetchModel: FetchModelInterface) {
    super(serviceName, null);
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
  protected jsonToObject (data) {
    /*
    this.setInfo();
    const id: Number = data.id;
    if (UserServiceHttp.getFromStore(id) === null) {
      UserServiceHttp.addToStore(
        new InfoEntity(data, id)
      );
    }
    return UserServiceHttp.getFromStore(id);
    */
  }
}
