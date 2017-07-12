import {InfoEntityInterface} from '../Entities/InfoEntityInterface';
export interface InfoServiceInterface {
  getName (): String;
  getInfo (): InfoEntityInterface;
}
