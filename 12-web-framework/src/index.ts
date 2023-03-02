import { User } from './models/User';
import { UserForm } from './views/UserForm';

const martin = new User({ id: 4, name: 'martin', age: 60 });
console.log(martin);
const userForm = new UserForm(document.getElementById('root')!, martin);

userForm.render();
