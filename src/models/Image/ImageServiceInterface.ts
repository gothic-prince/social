import {ImageEntityInterface} from './Entities/ImageEntityInterface';
export interface ImageServiceInterface {
  getImages (): ImageEntityInterface[];
  getName (): String;
  getLabel (): String;
  getDescription (): String;
  getIndexOfPoster (): Number;
  getId (): Number;
}
