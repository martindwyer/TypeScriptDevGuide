import axios from 'axios';
import { Collection } from './Collection';
import { Model } from './Model';

export interface UserProps {
  id?: number;
  name: string;
  age: number;
}

export class User extends Model {
  static userRootUrl: string = 'http://localhost:3000/users';

  constructor(data: UserProps) {
    super(data, User.userRootUrl);
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
    this.save();
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.data.age = age;
    this.save();
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      this.userRootUrl,
      (json: UserProps) => new User(json)
    );
  }
}
