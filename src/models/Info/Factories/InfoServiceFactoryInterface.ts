import {InfoServiceInterface} from '../InfoService/InfoServiceInterface';
import {StorageEntitiesInfo} from '../Storage/StorageEntitiesInfo';
export interface InfoServiceFactoryInterface {
  getInfoService(serviceName: String, id: Number, storage: StorageEntitiesInfo): InfoServiceInterface;
}
