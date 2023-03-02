import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View {
  public parent: Element;
  public user: User;

  constructor(parent: Element, user: User) {
    super();
    this.parent = parent;
    this.user = user;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    let newName: string = '';
    const input = this.parent.querySelector('input');
    if (input) {
      newName = input.value;
    }
    console.log(newName);

    this.user.set({
      id: this.user.data.id,
      name: newName,
      age: this.user.data.age,
    });
    this.render();
  };

  onSetAgeClick = (): void => {
    this.user.setRandomAge();
    this.render();
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  template(): string {
    return `
    <div class="container" style="width:350px;">
      <style>
      .btn {
        width: 135px;
        margin: 1rem 0;
      }
      table * {
        border: none;
      }
      </style>
      <h1 class="text-center">User</h1>
      <table class="table">
      <tr>
        <td>Name:</td>
        <td>${this.user.get('name')}</td>
      </tr>
      <tr>
        <td>Age:</td>
        <td>${this.user.get('age')}</td>
      </tr>
      <tr>
        <td><button class='set-name btn btn-primary'>Update Name</button></td>
        <td><input style="width:100%;height:2rem;margin-top:1.2rem;border:1px solid gray;border-radius: 4px;" placeholder="Enter new name" /></td>
      </tr>
      <tr>
        <td><button class='set-age btn btn-info'>Random Age</button></td>
        <td></td>
      </tr>
      </table>

    </div>
    `;
  }
}
