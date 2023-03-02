import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  // response.data has properties of
  // id
  // title
  // completed
  const toDo = response.data as Todo;

  const id = toDo.id;
  const title = toDo.title;
  const completed = toDo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The to do with ID: ${id}
  Has a title of ${title}
  Is it finished? ${completed}
  `);
};
