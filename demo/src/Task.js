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
    Element class name: e.target.className
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
  description = this.task.description;
  isCompleted = this.task.isCompleted;
  isEditing = this.task.isEditing;

  render() {
    return (
      <div className={'Task ' + (this.isCompleted ? 'isCompleted' : '')}>
        <div className="task-header">
          <input
            className="checkTask"
            type="checkbox"
            checked={this.task.isCompleted}
            onChange={this.handleTaskChanged}
          />
          <input
            name={'title'}
            className={this.isCompleted ? 'isCompleted' : ''}
            type="text"
            value={this.props.task.title ? this.props.task.title : '(no title)'}
            readOnly={!this.state.isEditing}
            onChange={this.handleTaskChanged}
          />
          <button
            className={'edit'}
            onClick={() => this.setState({ isEditing: !this.state.isEditing })}
          >
            Edit
          </button>
        </div>
        <input
          name={'description'}
          className={this.isCompleted ? 'isCompleted' : ''}
          type="text"
          value={this.description ? this.description : '(no description)'}
          readOnly={!this.state.isEditing}
          onChange={this.handleTaskChanged}
        />
      </div>
    );
  }
}

export default Task;
