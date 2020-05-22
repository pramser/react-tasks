import React, { Component } from 'react';

class Task extends Component {

  style = {
    backgroundColor: this.props.task.isCompleted ? '#61dafb' : '#ffffff',
    border: '1px solid black',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',

    // TODO: .isEditing - background-color: #cc4
  }

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
        style={this.style}
      >
        <div className="task-header" style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1
        }}>
          <span style={{ flex: 1 }}>
            <input
              type="checkbox"
              checked={this.props.task.isCompleted}
              onChange={this.handleTaskChanged}
            />
          </span>
          <span style={{ flex: 6 }}>
            <input
              style={
                {
                  backgroundColor: this.props.task.isCompleted ? '#61dafb' : '#ffffff',
                  borderWidth: '0px',
                  fontSize: '1.2em',
                  fontWeight: 500,
                  marginLeft: '5px',
                  flex: 10
                }
              }
              type="text"
              value={this.props.task.title ? this.props.task.title : ''}
              readOnly={!this.state.isEditing}
              onChange={this.handleTaskChanged}
            />
          </span>
          <button
            style={{
              height: '25px',
              flex: 2
            }}
            onClick={() => this.setState({ isEditing: !this.state.isEditing })}
          >
            Edit
          </button>
        </div>
        <input
          style={{
            backgroundColor: this.props.task.isCompleted ? '#61dafb' : '#ffffff',
            borderWidth: '0px',
            fontSize: '0.8em',
            flex: 1
          }}
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
