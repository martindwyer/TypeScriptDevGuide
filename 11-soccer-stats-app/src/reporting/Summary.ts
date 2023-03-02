import { Analyzer } from '../analyzers/Analyzer';
import { MatchData } from '../match/MatchData';
import { OutputTarget } from './OutputTarget';

export class Summary {
  public analyzer: Analyzer;
  public outputTarget: OutputTarget;

  constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
