import { ModelProps } from '../models/Model';

export abstract class View {
  abstract eventsMap(): { [key: string]: () => void };

  abstract template(): string;
}
