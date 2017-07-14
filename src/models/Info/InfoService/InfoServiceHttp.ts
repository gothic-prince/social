import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {InfoService} from './InfoService';
import {InfoEntity} from '../Entities/InfoEntity';
export class InfoServiceHttp extends InfoService {
  protected fetchModel: FetchModelInterface;
  constructor(serviceName: String, fetchModel: FetchModelInterface) {
    super(serviceName, null);
    this.fetchModel = fetchModel;
  }
  public getUrl () {
    return this.fetchModel.getUrlOne();
  }
  public get (succesFunc) {
    this.fetchModel.get((info) => {
      const entity = new InfoEntity(info.data, new Date(info.created), info.id, info.userId);
      this.setInfo(this.storage.add(entity.getId(), entity));
    }, succesFunc);
  }
}
