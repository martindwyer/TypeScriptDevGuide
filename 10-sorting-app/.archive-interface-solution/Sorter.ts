export interface Collection {
  data: any;
  length: number;
  compare(i: number, j: number): boolean;
  swap(i: number, j: number): void;
}

export class Sorter {
  public collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
