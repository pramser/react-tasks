import React from 'react';
import Task from './task';

const TaskList = (props) => {

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <h1>Uncompleted Tasks:</h1>
      {props.tasks.filter(task => !task.isCompleted).map((task, t) => (
        <Task
          key={task.id}
          task={task}
          onTaskChanged={props.onTaskChanged}
        />
      ))}

      <h1>Completed Tasks:</h1>
      {props.tasks.filter(task => task.isCompleted).map((task, t) => (
        <Task
          key={task.id}
          task={task}
          onTaskChanged={props.onTaskChanged}
        />
      ))}
    </div>
  );
}

export default TaskList;
