import {TSMap} from 'typescript-map';
import {FetchModelInterface} from '../../Fetch/FetchModelInterface';
import {CommentsPostFetchModel} from '../FetchModel/CommentsPostFetchModel';
import {ConferencePostFetchModel} from '../FetchModel/ConferencePostFetchModel';
import {MessagePostFetchModel} from '../FetchModel/MessagePostFetchModel';
import {NewsPostFetchModel} from '../FetchModel/NewsPostFetchModel';
import {PostServiceHttp} from '../PostService/PostServiceHttp';
import {PostStorageEntities} from '../Storage/PostStorageEntities';
import {AlbumPostFetchModel} from '../FetchModel/AlbumPostFetchModel';
import {AvaPostFetchModel} from 'models/Post/FetchModel/AvaPostFetchModel';
import {
  POST_COMMENTS,
  POST_ALBUM,
  POST_AVA,
  POST_CONFERENCE,
  POST_MESSAGE,
  POST_POSTS
} from '../PostService/Constants'
export class PostServiceHttpFactory {
  public static CATEGORY_COMMENTS = POST_COMMENTS;
  public static CATEGORY_CONFERENCE = POST_CONFERENCE;
  public static CATEGORY_MESSAGE = POST_MESSAGE;
  public static CATEGORY_POSTS = POST_POSTS;
  public static CATEGORY_ALBUM = POST_ALBUM;
  public static CATEGORY_AVA = POST_AVA;
  protected static models: TSMap <String, FetchModelInterface> = null;
  protected static getMap (): TSMap <String, FetchModelInterface> {
    if (PostServiceHttpFactory.models === null) {
      PostServiceHttpFactory.models = new TSMap <String, FetchModelInterface>();
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_COMMENTS, new CommentsPostFetchModel(null));
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_CONFERENCE, new ConferencePostFetchModel(null));
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_MESSAGE, new MessagePostFetchModel(null));
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_POSTS, new NewsPostFetchModel(null));
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_ALBUM, new AlbumPostFetchModel(null));
      PostServiceHttpFactory.models.set(PostServiceHttpFactory.CATEGORY_AVA, new AvaPostFetchModel(null));
    }
    return PostServiceHttpFactory.models;
  }
  get (serviceName: String, id: Number, storage: PostStorageEntities): PostServiceHttp {
    const fetchModel = PostServiceHttpFactory.getMap().get(serviceName);
    if (fetchModel !== undefined) {
      const fetchModelCloned = Object.assign(fetchModel, {id: id});
      return new PostServiceHttp(serviceName, fetchModelCloned, storage);
    }
    return null;
  }
}
