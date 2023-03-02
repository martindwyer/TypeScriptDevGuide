import { CsvFileReader } from '../data-access/CsvFileReader';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from '../data-access/utils';

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(name: string) {
    super(name);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
