import React, { Component } from 'react';
import Task from './task';

// CSS
import './task_list.css';

class TaskList extends Component {
  render() {
    return (
      <div className={'TaskList ' + this.props.orientation}>
        <div className="uncompleted-tasks">
          <h1>Uncompleted Tasks:</h1>
          {this.props.tasks
            .filter(task => !task.isCompleted)
            .map((task, t) => (
              <Task
                key={task.id}
                task={task}
                onTaskChanged={this.props.onTaskChanged}
              />
            ))}
        </div>

        <div className="completed-tasks">
          <h1>Completed Tasks:</h1>
          {this.props.tasks
            .filter(task => task.isCompleted)
            .map((task, t) => (
              <Task
                key={task.id}
                task={task}
                onTaskChanged={this.props.onTaskChanged}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
