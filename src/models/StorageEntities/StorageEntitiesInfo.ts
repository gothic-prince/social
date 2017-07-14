import {TSMap} from 'typescript-map';
import {InfoEntityInterface} from '../Info/Entities/InfoEntityInterface';
export class StorageEntitiesInfo {
  protected static info: TSMap<Number, InfoEntityInterface> = new TSMap <Number, InfoEntityInterface>();

  all (): TSMap<Number, InfoEntityInterface> {
    return StorageEntitiesInfo.info;
  }
  get(id: Number): InfoEntityInterface {
    return StorageEntitiesInfo.info.get(id);
  }
  add(id: Number, entity: InfoEntityInterface): InfoEntityInterface {
    if (this.get(entity.getId()) === undefined) {
      StorageEntitiesInfo.info.set(entity.getId(), entity);
    }
    return this.get(entity.getId());
  }
  reset() {
    StorageEntitiesInfo.info = new TSMap <Number, InfoEntityInterface>();
  }
}
