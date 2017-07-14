import {InfoServiceInterface} from '../InfoService/InfoServiceInterface';
export interface InfoServiceFactoryInterface {
  getInfoService(serviceName: String, id: Number): InfoServiceInterface;
}
