import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, deleteTask, Task } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  tasks: Task[];
  fetchTasks: Function;
  deleteTask: typeof deleteTask;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }
  onButtonClick = () => {
    this.props.fetchTasks();
    this.setState({ fetching: true });
  };

  onTaskClick = (id: number): void => {
    this.props.deleteTask(id);
  };

  componentDidUpdate(prevProps: AppProps) {
    if (prevProps.tasks.length && this.props.tasks.length) {
      this.setState({ fetching: false });
    }
  }

  renderList(): JSX.Element[] {
    return this.props.tasks.map((task: Task) => {
      return (
        <div onClick={() => this.onTaskClick(task.id)} key={task.id}>
          {task.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>This is App</h1>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'Loading...' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { tasks: Task[] } => {
  return { tasks: state.tasks };
};

export const App = connect(mapStateToProps, { fetchTasks, deleteTask })(_App);
