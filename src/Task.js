import React, { Component } from 'react';

// CSS
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);

    this.handleTaskChanged = this.handleTaskChanged.bind(this);
  }

  handleTaskChanged(e) {
    /*
    Element value: e.target.value
    Element name: e.target.name
    Element type: e.target.type
    */

    var updatedTask = { ...this.props.task };

    if (e.target.type === 'checkbox') {
      updatedTask.isCompleted = e.target.checked;
    } else {
      updatedTask[e.target.name] = e.target.value;
    }

    this.props.onTaskChanged(updatedTask);
  }

  // This is probably super unnecessary. I just want cleanliness.
  task = this.props.task;
  taskIsCompleted = this.task.isCompleted;

  render() {
    return (
      <div className={'Task ' + (this.taskIsCompleted ? 'isCompleted' : '')}>
        <div className="task-header">
          <input
            className="isCompleted"
            type="checkbox"
            checked={this.task.isCompleted}
            onChange={this.handleTaskChanged}
          />
          <span className="title">
            {this.props.task.title ? this.props.task.title : 'no title'}
          </span>
        </div>
        <span className="description">
          {this.task.description ? this.task.description : 'no description'}
        </span>
      </div>
    );
  }
}

export default Task;
