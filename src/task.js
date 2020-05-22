import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize'

const Task = ({ task, onTaskChanged }) => {

  const { title, description, isCompleted } = task;
  const [isEditing, setIsEditing] = useState(false);

  var color = isCompleted ? 'white' : 'black';
  var backgroundColor = isCompleted ? '#447ead' : (isEditing ? '#ffe730' : 'white');

  const style = {
    backgroundColor: backgroundColor,
    border: '1px solid black',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',
  }

  const handleTaskChanged = ({ name, checked, value }) => {
    var t = { ...task };
    t[name] = name == 'isCompleted' ? checked : value;
    onTaskChanged(t);
  }

  return (
    <div style={style}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1
        }}>
        <span style={{ flex: 1 }}>
          <input
            name="isCompleted"
            type="checkbox"
            checked={isCompleted}
            onChange={event => handleTaskChanged(event.target)}
          />
        </span>
        <span style={{ flex: 6 }}>
          <input
            name="title"
            style={
              {
                color: color,
                backgroundColor: backgroundColor,
                borderWidth: '0px',
                fontSize: '1.2em',
                fontWeight: 500,
                marginLeft: '5px',
                flex: 10
              }
            }
            type="text"
            value={title ? title : ''}
            readOnly={!isEditing}
            onChange={event => handleTaskChanged(event.target)}
          />
        </span>
        <button
          style={{
            height: '25px',
            flex: 2
          }}
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
          </button>
      </div>
      <TextareaAutosize
        name="description"
        style={{
          color: color,
          backgroundColor: backgroundColor,
          borderWidth: '0px',
          resize: 'none',
          fontSize: '0.8em',
          flex: 1
        }}
        value={description ? description : ''}
        readOnly={!isEditing}
        onChange={event => handleTaskChanged(event.target)}
      />
    </div>
  );
}

export default Task;
