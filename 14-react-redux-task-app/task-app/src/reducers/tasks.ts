import { FetchTasksAction, DeleteTaskAction, Task } from '../actions';
import { ActionTypes } from '../actions/types';

type AppActions = FetchTasksAction | DeleteTaskAction;

export const tasksReducer = (state: Task[] = [], action: AppActions) => {
  switch (action.type) {
    case ActionTypes.fetchTasks:
      return action.payload;
    case ActionTypes.deleteTask:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};
