import React, { Component } from 'react';

// CSS
import './task.css';

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

  render() {
    return (
      <div
        className={'Task ' + (this.props.task.isCompleted ? 'isCompleted' : '')}
      >
        <div className="task-header">
          <span className="checkTask">
            <input
              type="checkbox"
              checked={this.props.task.isCompleted}
              onChange={this.handleTaskChanged}
            />
          </span>
          <span className="header-title">
            <input
              name="title"
              className={
                'title ' + (this.props.task.isCompleted ? 'isCompleted' : '')
              }
              type="text"
              value={this.props.task.title ? this.props.task.title : ''}
              readOnly={!this.state.isEditing}
              onChange={this.handleTaskChanged}
            />
          </span>
          <button
            className="edit"
            onClick={() => this.setState({ isEditing: !this.state.isEditing })}
          >
            Edit
          </button>
        </div>
        <input
          name={'description'}
          className={
            'description ' + (this.props.task.isCompleted ? 'isCompleted' : '')
          }
          type="text"
          value={this.props.task.description ? this.props.task.description : ''}
          readOnly={!this.state.isEditing}
          onChange={this.handleTaskChanged}
        />
      </div>
    );
  }
}

export default Task;
