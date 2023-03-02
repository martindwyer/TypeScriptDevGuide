import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchReader } from './match/MatchReader';
import { ConsoleReport } from './reporting/ConsoleReport';
import { HTMLReport } from './reporting/HTMLReport';
import { Summary } from './reporting/Summary';

const reader = new MatchReader('./src/data-access/data/football.csv');

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(reader.data);

const summaryHTML = new Summary(
  new WinsAnalysis('Man United'),
  new HTMLReport()
);

summaryHTML.buildAndPrintReport(reader.data);
