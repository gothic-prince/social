export interface FetchModelInterface {
  getUrlAll(): string;
  getUrlOne(): string;
  getUrlAdd(): string;
  getUrlRemove(): string;
  getUrlUpdate(): string;
  all (jsonToObjFunc: any, successFunc: any);
  get (jsonToObjFunc: any, successFunc: any);
  update (func: any, entity);
  remove (func: any, entity);
  add (func: any, entity);
}
