import {FetchModelInterface} from './FetchModelInterface';
export abstract class FetchModelAbstract implements FetchModelInterface {
  public fetched = false;
  private _error = () => {};
  protected getError(): any {
    return this._error;
  }
  protected setError(error) {
    this._error = error;
  }
  public abstract getUrlAll(): string;
  public abstract getUrlAdd(): string;
  public abstract getUrlRemove(): string;
  public abstract getUrlUpdate(): string;
  public all (func: any) {
    try {
      fetch(this.getUrlAll()).then((data) => {
        data.json().then((entities) => {
          func(entities);
          this.fetched = true;
        }).catch(() => {
          this.getError()('ERROR: JsonParse');
          this.fetched = true;
        })
      }).catch(() => {
        this.getError()('ERROR: NotFound');
        this.fetched = true;
      });
    } catch (e) {
      this.getError()('ERROR: SYS: ' + e.message);
    }
  }
  update (func: any, entity) {}
  remove (func: any, entity) {}
  add (func: any, entity) {}
}
