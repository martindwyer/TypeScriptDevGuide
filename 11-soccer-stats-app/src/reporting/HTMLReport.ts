import fs from 'fs';
import { OutputTarget } from './OutputTarget';

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
      </div>
    `;
    fs.writeFileSync('./output/report.html', html);
  }
}
