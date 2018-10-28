import React, { Component } from 'react';

// CSS
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

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
            className="checkTask"
            type="checkbox"
            checked={this.task.isCompleted}
            onChange={this.handleTaskChanged}
          />
          <input
            className={'title'}
            type="text"
            value={this.props.task.title ? this.props.task.title : '(no title)'}
            readOnly={!this.state.isEditing}
          />
          <button
            onClick={() => this.setState({ isEditing: !this.state.isEditing })}
            className="edit"
          >
            Edit
          </button>
        </div>
        <input
          className="description"
          type="text"
          value={
            this.task.description ? this.task.description : '(no description)'
          }
          readOnly={!this.state.isEditing}
        />
      </div>
    );
  }
}

export default Task;
