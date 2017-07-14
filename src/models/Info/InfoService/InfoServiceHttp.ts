import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {InfoService} from './InfoService';
import {InfoEntity} from '../Entities/InfoEntity';
import {StorageEntitiesInfo} from '../Storage/StorageEntitiesInfo';
export class InfoServiceHttp extends InfoService {
  protected fetchModel: FetchModelInterface;
  constructor(serviceName: String, fetchModel: FetchModelInterface, storage: StorageEntitiesInfo) {
    super(serviceName, null, storage);
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
