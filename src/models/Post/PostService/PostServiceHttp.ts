import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {PostService} from './PostService';
import {PostEntity} from '../Entities/PostEntity';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {FileManager} from '../../File/FileManager/FileManager';
import {PostManager} from '../PostManager/PostManager';
import {UserManager} from '../../User/UserManager/UserManager';

export class PostServiceHttp extends PostService {
  protected fetchModel: FetchModelInterface;
  constructor(serviceName: String, fetchModel: FetchModelInterface, storage: PostStorageEntities) {
    super(serviceName, [], storage);
    this.fetchModel = fetchModel;
  }
  public getUrl () {
    return this.fetchModel.getUrlAll();
  }
  public fetch (succesFunc) {
    this.fetchModel.all((userData) => {
      const id: Number = userData.id;
      this.add(
        this.storage.add(
          id, new PostEntity(
            new Date(), userData.id, new InfoManager(), new FileManager(), new PostManager(), new UserManager()
          )
        )
      );
    }, succesFunc);
  }
}
