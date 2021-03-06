import React, { useState } from 'react';
import { render } from 'react-dom';

import TaskList from '../../src/task_list';

import './index.css';
import logo from './logo.svg';

const Demo = () => {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        title: 'Milk',
        description: 'Do not forget milk at the grocery store.',
        isCompleted: false
      },
      {
        id: 2,
        title: 'Weekly Enhancements',
        description: 'Enhance this code to make it better and easier to use.',
        isCompleted: false
      },
      {
        id: 3,
        title: 'React Tasks',
        description: 'Make a component for easily building task lists.',
        isCompleted: true
      }
    ]
  );

  const onTaskChanged = task => {
    var _tasks = tasks.slice();
    var i = _tasks.findIndex(t => task.id === t.id);
    _tasks[i] = task;

    setTasks(_tasks);
  };

  const createTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, title: '', description: '', isCompleted: false }]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Tasks</p>
      </header>
      <button onClick={createTask}>Add Task</button>
      <TaskList tasks={tasks} onTaskChanged={onTaskChanged} />
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
