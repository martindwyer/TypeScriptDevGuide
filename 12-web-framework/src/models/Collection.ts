import axios from 'axios';
import { Eventing } from './Eventing';
import { Model, ModelProps } from './Model';
import { User } from './User';

export class Collection<T, K> {
  models: T[];
  rootUrl: string;
  deserialize: (json: K) => T;
  events: Eventing = new Eventing();

  constructor(rootUrl: string, deserialize: (json: K) => T) {
    this.rootUrl = rootUrl;
    this.models = [];
    this.deserialize = deserialize;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res) => {
      res.data.forEach((data: K) => {
        this.models.push(this.deserialize(data));
      });

      this.trigger('change');
    });
  }
}
