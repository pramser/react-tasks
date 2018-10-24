import React, { Component } from 'react';
import TaskList from 'react-tasks';

// CSS
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.setState({
      tasks: [
        {
          id: 1,
          title: 'Milk',
          description: 'Do not forget milk at the grocery store.',
          isCompleted: false
        },
        {
          id: 2,
          title: 'Weekly Enhancements',
          description: 'Enhance this code to make it better and easier to use.',
          isCompleted: false
        },
        {
          id: 3,
          title: 'React Tasks',
          description: 'Make a component for easily building task lists.',
          isCompleted: true
        }
      ]
    });
  }

  onTaskChanged = updatedTask => {
    console.log(updatedTask);
    var tasks = this.state.tasks.slice();
    var updateIndex = tasks.findIndex(task => task.id === updatedTask.id);
    tasks[updateIndex] = updatedTask;

    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Tasks</p>
        </header>
        <TaskList tasks={this.state.tasks} onTaskChanged={this.onTaskChanged} />
      </div>
    );
  }
}

export default App;
