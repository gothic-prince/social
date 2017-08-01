import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {PostService} from './PostService';
import {PostEntity} from '../Entities/PostEntity';
import {InfoManager} from '../../Info/InfoManager/InfoManager';
import {FileManager} from '../../File/FileManager/FileManager';
import {PostManager} from '../PostManager/PostManager';
import {UserManager} from '../../User/UserManager/UserManager';
import {PostServiceHttpFactory} from 'models/Post/Factories/PostServiceHttpFactory';
import {PostEntityInterface} from '../Entities/PostEntityInterface';
import {PostManagerInterface} from '../PostManager/PostManagerInterface';

export class PostServiceHttp extends PostService {
  protected fetchModel: FetchModelInterface;
  constructor(serviceName: String, fetchModel: FetchModelInterface, storage: PostStorageEntities) {
    super(serviceName, [], storage);
    this.fetchModel = fetchModel;
  }
  public getFetchModel() {
    return this.fetchModel;
  }
  public fetch (succesFunc) {
    if (this.getName() !== PostServiceHttpFactory.CATEGORY_MESSAGE) {
      this.findAll(succesFunc);
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
  protected getMessagePostById (id: Number, storage: PostStorageEntities, succesFunc) {
    const factory = new PostServiceHttpFactory();
    const service = factory.get(PostServiceHttpFactory.CATEGORY_MESSAGE, id, storage);
    service.getFetchModel().get((data) => {
      const posts = data.posts.map((itemid) => {
        return this.storage.add(
          itemid, this.getPostEntity(itemid, new PostManager())
        );
      });
      const postManager = new PostManager();
      postManager.add(new PostService(PostServiceHttpFactory.CATEGORY_MESSAGE, posts, storage))
      this.add(
        this.storage.add(
          data.id, this.getPostEntity(data.id, postManager)
        )
      )
    }, succesFunc);
  }
  protected getPostEntity (id: Number, postManager: PostManagerInterface): PostEntityInterface {
    // todo: Should return PostEntityHttpProxy, which pull data from server by callback
    return new PostEntity(
      new Date(), id, new InfoManager(), new FileManager(), postManager, new UserManager()
    );
  }
}
