import { MatchData } from '../match/MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}
