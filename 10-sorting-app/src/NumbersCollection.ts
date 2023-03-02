import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  public data: number[];
  public length: number;

  constructor(data: number[]) {
    super();
    this.data = data;
    this.length = data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}
