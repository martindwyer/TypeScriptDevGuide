import axios from 'axios';
import 'redux';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTasksAction {
  type: ActionTypes.fetchTasks;
  payload: Task[];
}

export interface DeleteTaskAction {
  type: ActionTypes.deleteTask;
  payload: number;
}

const apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(apiUrl);
    dispatch({
      type: ActionTypes.fetchTasks,
      payload: response.data,
    });
  };
};

export const deleteTask = (id: number): DeleteTaskAction => {
  return {
    type: ActionTypes.deleteTask,
    payload: id,
  };
};
