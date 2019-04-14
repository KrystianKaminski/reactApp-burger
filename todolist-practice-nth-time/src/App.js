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
    key: Date.now(),
    completed: false
  })

  onClickHandler = () => {
    this.setState({
      tasksArray: this.state.tasksArray.concat(this.createNewTask(this.state.task)),
      task: ''
    })
  }

  onTaskClickHandler = (taskKey) =>
    this.setState({
      tasksArray: this.state.tasksArray.map(task =>
        task.key === taskKey ?
          {
            ...task,
            completed: !task.completed
          }
          : task
      )

    })

  alertHandler = () => {
    alert('You must add something!')
  }

  deleteTask = (e, id) => {
    e.stopPropagation()
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
          alert={this.alertHandler}
        />
        <TasksList
          tasks={this.state.tasksArray}
          delete={this.deleteTask}
          clicked={this.onTaskClickHandler}
        />
      </div>
    );
  }
}

export default App;
