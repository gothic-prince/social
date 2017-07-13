export interface FetchModelInterface {
  getUrlAll(): string;
  getUrlAdd(): string;
  getUrlRemove(): string;
  getUrlUpdate(): string;
  all (func: any);
  update (func: any, entity);
  remove (func: any, entity);
  add (func: any, entity);
}
