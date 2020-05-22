import React, { useState } from 'react';

const Task = (props) => {

  const style = {
    backgroundColor: props.task.isCompleted ? '#61dafb' : '#ffffff',
    border: '1px solid black',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',

    // TODO: .isEditing - background-color: #cc4
  }

  const [isEditing, setIsEditing] = useState(false);

  /**
   * Element value: e.target.value
   * Element name: e.target.name
   * Element type: e.target.type
   * Element class name: e.target.className
   */
  const handleTaskChanged = (e) => {

    var updatedTask = { ...props.task };

    if (e.target.type === 'checkbox') {
      updatedTask.isCompleted = e.target.checked;
    } else {
      updatedTask[e.target.name] = e.target.value;
    }

    props.onTaskChanged(updatedTask);
  }

  return (
    <div
      style={style}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1
        }}>
        <span style={{ flex: 1 }}>
          <input
            type="checkbox"
            checked={props.task.isCompleted}
            onChange={handleTaskChanged}
          />
        </span>
        <span style={{ flex: 6 }}>
          <input
            style={
              {
                backgroundColor: props.task.isCompleted ? '#61dafb' : '#ffffff',
                borderWidth: '0px',
                fontSize: '1.2em',
                fontWeight: 500,
                marginLeft: '5px',
                flex: 10
              }
            }
            type="text"
            value={props.task.title ? props.task.title : ''}
            readOnly={!isEditing}
            onChange={handleTaskChanged}
          />
        </span>
        <button
          style={{
            height: '25px',
            flex: 2
          }}
          onClick={() => setIsEditing({ isEditing: !isEditing })}
        >
          Edit
          </button>
      </div>
      <input
        style={{
          backgroundColor: props.task.isCompleted ? '#61dafb' : '#ffffff',
          borderWidth: '0px',
          fontSize: '0.8em',
          flex: 1
        }}
        type="text"
        value={props.task.description ? props.task.description : ''}
        readOnly={!isEditing}
        onChange={handleTaskChanged}
      />
    </div>
  );
}

export default Task;
