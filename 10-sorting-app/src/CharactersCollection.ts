import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  data: string;
  length: number;

  constructor(str: string) {
    super();
    this.data = str;
    this.length = str.length;
  }
  compare(i: number, j: number): boolean {
    return this.data[i].toUpperCase() > this.data[j].toUpperCase();
  }
  swap(i: number, j: number): void {
    let wordArr = this.data.split('');
    let temp = wordArr[i];
    wordArr[i] = wordArr[j];
    wordArr[j] = temp;
    this.data = wordArr.join('');
  }
}
