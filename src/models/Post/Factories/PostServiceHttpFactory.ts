import {TSMap} from 'typescript-map';
import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {CommentsPostFetchModel} from '../FetchModel/CommentsPostFetchModel';
import {ConferencePostFetchModel} from '../FetchModel/ConferencePostFetchModel';
import {MessagePostFetchModel} from '../FetchModel/MessagePostFetchModel';
import {NewsPostFetchModel} from '../FetchModel/NewsPostFetchModel';
import {PostServiceInterface} from '../PostService/PostServiceInterface';
import {PostServiceHttp} from '../PostService/PostServiceHttp';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
export class PostServiceHttpFactory {
  public static CATEGORY_COMMENTS = 'COMMENTS';
  public static CATEGORY_CONFERENCE = 'CONFERENCE';
  public static CATEGORY_MESSAGE = 'MESSAGE';
  public static CATEGORY_POSTS = 'POSTS';
  protected static models: TSMap <String, FetchModelInterface> = null;
  protected static getMap (): TSMap <String, FetchModelInterface> {
    if (PostServiceHttpFactory.models === null) {
      PostServiceHttpFactory.models = new TSMap <String, FetchModelInterface>();
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_COMMENTS, new CommentsPostFetchModel(null));
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_CONFERENCE, new ConferencePostFetchModel(null));
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_MESSAGE, new MessagePostFetchModel(null));
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_POSTS, new NewsPostFetchModel(null));
    }
    return PostServiceHttpFactory.models;
  }
  get (serviceName: String, id: Number, storage: PostStorageEntities): PostServiceInterface {
    const fetchModel = PostServiceHttpFactory.getMap().get(serviceName);
    if (fetchModel !== undefined) {
      const fetchModelCloned = Object.assign(fetchModel, {id: id});
      return new PostServiceHttp(serviceName, fetchModelCloned, storage);
    }
    return null;
  }
}
