import React from 'react';
import Task from './task';

const TaskList = ({ tasks, onTaskChanged, orientation }) => {

  orientation = orientation ? orientation : 'vertical';
  const flexDirection = orientation == 'horizontal' ? 'row' : 'column';
  const alignItems = orientation == 'horizontal' ? 'flex-start' : 'center';

  const style = {
    display: 'flex',
    flexDirection: flexDirection,
    alignContent: 'center',
    alignItems: alignItems,
  }

  return (
    <div style={style}>
      <div style={{ flex: 1 }}>
        <h1>Uncompleted Tasks:</h1>
        <Tasks
          tasks={tasks}
          filter={task => !task.isCompleted}
          onTaskChanged={onTaskChanged} />
      </div>

      <div style={{ flex: 1 }}>
        <h1>Completed Tasks:</h1>
        <Tasks
          tasks={tasks}
          filter={task => task.isCompleted}
          onTaskChanged={onTaskChanged} />
      </div>
    </div>
  );
}

const Tasks = ({ tasks, filter, onTaskChanged }) => {

  return tasks.filter(filter).map((task) => (
    <Task
      key={task.id}
      task={task}
      onTaskChanged={onTaskChanged}
    />
  ))
}

export default TaskList;
