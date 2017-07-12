import {FileEntityInterface} from '../Entities/FileEntityInterface';
export interface FileServiceInterface {
  getName (): String;
  all (): FileEntityInterface[];
  add (file: FileEntityInterface);
  remove (file: FileEntityInterface);
}
