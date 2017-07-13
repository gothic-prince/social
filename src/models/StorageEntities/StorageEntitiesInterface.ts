import {TSMap} from 'typescript-map';
export interface StorageEntitiesInterface {
  all <T> (typeName: Number): TSMap<Number, T>;
  get <T> (storage: T, id: Number): T;
  add <T> (storage: T, id: Number, entity);
}
