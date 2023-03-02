import axios, { AxiosPromise } from 'axios';
import { Eventing } from './Eventing';
import { UserProps } from './User';

export type ModelProps = UserProps; // Can be extended to add other models as needed

export class Model extends Eventing {
  static rootUrl: string = '';
  data: ModelProps;

  constructor(data: ModelProps, url: string) {
    super();
    this.data = data;
    Model.rootUrl = url;
    if (!data['id']) {
      this.save();
    }
  }

  get(prop: string): number | string {
    return this.data[prop];
  }

  set(props: ModelProps): void {
    Object.assign(this.data, props);
    this.save();
  }

  static fetch(id: number): AxiosPromise {
    return axios.get(`${Model.rootUrl}/${id}`);
  }

  save(): AxiosPromise {
    const { id } = this.data;
    if (id) {
      return axios.put(`${Model.rootUrl}/${id}`, this.data);
    } else {
      return axios.post(`${Model.rootUrl}`, this.data);
    }
  }
}
