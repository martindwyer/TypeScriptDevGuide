import fs from 'fs';

export abstract class CsvFileReader<T> {
  public data: T[] = [];
  public fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.read();
  }

  read() {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): T => {
        return this.mapRow(row);
      });
  }

  abstract mapRow(row: string[]): any;
}
