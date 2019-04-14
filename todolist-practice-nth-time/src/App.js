import React, { Component } from 'react';
import NewTask from './NewTask';

class App extends Component {

  state = {
    task: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  render() {
    return (
      <div>
        <NewTask
          changeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
}

export default App;
