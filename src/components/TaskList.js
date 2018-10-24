import React, { Component } from 'react';
import Task from './Task';

// CSS
import './TaskList.css';

class TaskList extends Component {
  render() {
    return (
      <div className="TaskList">
        <h1>Uncompleted Tasks:</h1>
        {this.props.tasks.filter(task => !task.isCompleted).map((task, t) => (
          <Task
            key={task.id}
            task={task}
            onTaskChanged={this.props.onTaskChanged}
          />
        ))}

        <h1>Completed Tasks:</h1>
        {this.props.tasks.filter(task => task.isCompleted).map((task, t) => (
          <Task
            key={task.id}
            task={task}
            onTaskChanged={this.props.onTaskChanged}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
