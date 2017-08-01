import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {PostService} from './PostService';
import {PostEntity} from '../Entities/PostEntity';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {FileManager} from '../../File/FileManager/FileManager';
import {PostManager} from '../PostManager/PostManager';
import {UserManager} from '../../User/UserManager/UserManager';
import {PostServiceHttpFactory} from 'models/Post/Factories/PostServiceHttpFactory';
import {MessagePostFetchModel} from '../FetchModel/MessagePostFetchModel';

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
        this.findAll(succesFunc);
        break;
      case PostServiceHttpFactory.CATEGORY_COMMENTS:
        break;
      case PostServiceHttpFactory.CATEGORY_POSTS:
        this.findAll(succesFunc);
        break;
      case PostServiceHttpFactory.CATEGORY_MESSAGE:
        break;
      default:
        break;
    }
  }
  protected findAll (succesFunc) {
    const ips = [];
    this.getFetchModel().all((id) => {
      ips.push(id);
    }, () => {
      this.findAllByIds(ips, this.storage, succesFunc)
    });
  }
  protected findAllByIds(ids: Number[], storage: PostStorageEntities, succesFunc) {
    let i = 0;
    ids.map((id: Number) => {
      this.getMessagePostById(id, storage, () => {
        i++;
        if (i === (ids.length)) {
          succesFunc();
        }
      });
    });
  }
  // todo: FETCH
  protected getMessagePostById (id: Number, storage: PostStorageEntities, succesFunc) {
    const factory = new PostServiceHttpFactory();
    const service = factory.get(PostServiceHttpFactory.CATEGORY_MESSAGE, id, storage);
    service.getFetchModel().get((data) => {
      const posts = data.posts.map((itemid) => {
        // todo: connect
        return this.storage.add(
          itemid, new PostEntity(
            new Date(), itemid, new InfoManager(), new FileManager(), new PostManager(), new UserManager()
          )
        );
      });
      const postManager = new PostManager();
      postManager.add(new PostService(PostServiceHttpFactory.CATEGORY_MESSAGE, data.posts, storage))
      this.add(
        this.storage.add(
          data.id, new PostEntity(
            new Date(), data.id, new InfoManager(), new FileManager(), postManager, new UserManager()
          )
        )
      )
    }, succesFunc);
  }
}
