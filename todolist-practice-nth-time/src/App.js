import React, { Component } from 'react';
import NewTask from './NewTask';
import TasksList from './TasksList';

class App extends Component {

  state = {
    task: '',
    tasksArray: []
  }

  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  createNewTask = text => ({
    todo: text,
    key: Date.now()
  })

  onClickHandler = () => {
    this.setState({
      tasksArray: this.state.tasksArray.concat(this.createNewTask(this.state.task)),
      task: ''
    })
  }

  deleteTask = (id) => {
    this.setState({
      tasksArray: this.state.tasksArray.filter(task => task.key !== id)
    })
  }

  render() {
    return (
      <div>
        <NewTask
          changeHandler={this.onChangeHandler}
          clicked={this.onClickHandler}
          value={this.state.task}
        />
        <TasksList
          tasks={this.state.tasksArray}
          delete={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
