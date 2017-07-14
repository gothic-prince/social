import {InfoEntityInterface} from './InfoEntityInterface';
export class InfoEntity implements InfoEntityInterface {
  private data: String[] = [];
  private date: Date;
  private id: Number;
  private userId: Number;
  constructor(data: String[], date: Date, id: Number, userId: Number) {
    this.data = data;
    this.date = date;
    this.id = id;
    this.userId = userId;
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
  getId(): Number {
    return this.id;
  }
  getUserId(): Number {
    return this.userId;
  }
}
