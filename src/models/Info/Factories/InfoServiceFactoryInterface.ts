import {InfoServiceInterface} from '../InfoService/InfoServiceInterface';
import {StorageEntitiesInfo} from '../../StorageEntities/StorageEntitiesInfo';
export interface InfoServiceFactoryInterface {
  getInfoService(serviceName: String, id: Number, storage: StorageEntitiesInfo): InfoServiceInterface;
}
