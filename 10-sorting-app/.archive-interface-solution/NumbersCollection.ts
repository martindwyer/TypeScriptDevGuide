import { Collection } from './Sorter';

export class NumbersCollection implements Collection {
  public data: number[];
  public length: number;

  constructor(data: number[]) {
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
