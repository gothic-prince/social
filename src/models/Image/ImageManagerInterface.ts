import {ImageServiceInterface} from './ImageServiceInterface';

export interface ImageManagerInterface {
  get (index): ImageServiceInterface;
  all (): ImageServiceInterface[];
  add (service: ImageServiceInterface);
  set(services: ImageServiceInterface[]);
}
