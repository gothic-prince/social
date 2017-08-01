import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {PostService} from './PostService';
import {PostEntity} from '../Entities/PostEntity';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {FileManager} from '../../File/FileManager/FileManager';
import {PostManager} from '../PostManager/PostManager';
import {UserManager} from '../../User/UserManager/UserManager';
import {PostServiceHttpFactory} from 'models/Post/Factories/PostServiceHttpFactory';

export class PostServiceHttp extends PostService {
  protected fetchModel: FetchModelInterface;
  constructor(serviceName: String, fetchModel: FetchModelInterface, storage: PostStorageEntities) {
    super(serviceName, [], storage);
    this.fetchModel = fetchModel;
  }
  public getFetchModel() {
    return this.fetchModel;
  }
  // todo: FETCH
  public fetch (succesFunc) {
    switch (this.getName()) {
      case PostServiceHttpFactory.CATEGORY_CONFERENCE:
        this.fetchModel.all((id) => {
          console.log(id);
        }, succesFunc);
        break;
      case PostServiceHttpFactory.CATEGORY_COMMENTS:
        break;
      case PostServiceHttpFactory.CATEGORY_POSTS:
        break;
      case PostServiceHttpFactory.CATEGORY_MESSAGE:
        break;
      default:
        break;
    }
  }
  // todo: FETCH
  protected findById (id: Number, storage: PostStorageEntities, succesFunc) {
    const factory = new PostServiceHttpFactory();
    const service = factory.get(PostServiceHttpFactory.CATEGORY_MESSAGE, id, storage);
    service.getFetchModel().get((data) => {
      this.storage.add(
        data.id, new PostEntity(
          new Date(), data.id, new InfoManager(), new FileManager(), new PostManager(), new UserManager()
        )
      )
    }, succesFunc);
  }
}
