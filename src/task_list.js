import React from 'react';
import Task from './task';

const TaskList = (props) => {

  const { tasks, onTaskChanged } = props;

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <h1>Uncompleted Tasks:</h1>
      <Tasks
        tasks={tasks}
        filter={task => !task.isCompleted}
        onTaskChanged={onTaskChanged} />

      <h1>Completed Tasks:</h1>
      <Tasks
        tasks={tasks}
        filter={task => task.isCompleted}
        onTaskChanged={onTaskChanged} />
    </div>
  );
}

const Tasks = (props) => {

  const { tasks, filter, onTaskChanged } = props;

  return tasks.filter(filter).map((task) => (
    <Task
      key={task.id}
      task={task}
      onTaskChanged={onTaskChanged}
    />
  ))
}

export default TaskList;
