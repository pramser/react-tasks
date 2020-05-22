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

    var t = { ...props.task };
    t[e.name] = e.name == 'isCompleted' ? e.checked : e.value;

    props.onTaskChanged(t);
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
            checked={props.task.isCompleted}
            onChange={event => handleTaskChanged(event.target)}
          />
        </span>
        <span style={{ flex: 6 }}>
          <input
            name="title"
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
            onChange={event => handleTaskChanged(event.target)}
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
        name="description"
        style={{
          backgroundColor: props.task.isCompleted ? '#61dafb' : '#ffffff',
          borderWidth: '0px',
          fontSize: '0.8em',
          flex: 1
        }}
        type="text"
        value={props.task.description ? props.task.description : ''}
        readOnly={!isEditing}
        onChange={event => handleTaskChanged(event.target)}
      />
    </div>
  );
}

export default Task;
