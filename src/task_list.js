import React, { Component } from 'react';
import Task from './task';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center'
}

class TaskList extends Component {
  render() {
    return (
      <div className="TaskList" style={style}>
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
