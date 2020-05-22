import React, { useState } from 'react';

const Task = (props) => {

  const { task, onTaskChanged } = props;
  const { title, description, isCompleted } = task;
  const [isEditing, setIsEditing] = useState(false);
  var backgroundColor = isCompleted ? '#61dafb' : (isEditing ? '#ffe730' : '#ffffff');

  const style = {
    backgroundColor: backgroundColor,
    border: '1px solid black',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: '10px',
  }

  const handleTaskChanged = (e) => {
    var t = { ...task };
    t[e.name] = e.name == 'isCompleted' ? e.checked : e.value;
    onTaskChanged(t);
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
      <input
        name="description"
        style={{
          backgroundColor: backgroundColor,
          borderWidth: '0px',
          fontSize: '0.8em',
          flex: 1
        }}
        type="text"
        value={description ? description : ''}
        readOnly={!isEditing}
        onChange={event => handleTaskChanged(event.target)}
      />
    </div>
  );
}

export default Task;
