import { MatchData } from '../match/MatchData';
import { MatchResult } from '../match/MatchResult';
import { Analyzer } from './Analyzer';

export class WinsAnalysis implements Analyzer {
  public team: string;

  constructor(team: string) {
    this.team = team;
  }

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      }
      if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} matches`;
  }
}
