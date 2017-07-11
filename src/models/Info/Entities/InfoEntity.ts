import {InfoEntityInterface} from './InfoEntityInterface';
export class InfoEntity implements InfoEntityInterface {
  private data: String[] = [];
  private date: Date;
  constructor(data: String[], date: Date) {
    this.data = data;
    this.date = date;
  }
  setData(data: String[]) {
    this.data = data;
  }
  getData(): String[] {
    return this.data;
  }
  getLast(): String {
    if (this.data.length === 0) {
      this.data = [''];
    }
    return this.data[this.data.length - 1];
  }
  getDate(): Date {
    return this.date;
  }
}
