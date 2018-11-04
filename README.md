# React Tasks [![Build Status](https://travis-ci.org/pramser/react-tasks.svg?branch=master)](https://travis-ci.org/pramser/react-tasks)

Quickly create movable task lists in React.

## Basic Usage

Using the task list is as simple as importing and implementing the `<TaskList />` in your React app with a basic list of tasks and something to handle updates from the component.

```js
  state = {
    tasks: [
      {id: 1, title: 'Task Title', description: 'Describing the task...', isCompleted: true}
    ]
  }

  onTaskChanged = updatedTask => {
    console.log(updatedTask);
  };

  render() {
    return (
      <div className="App">
        <TaskList tasks={this.state.tasks} onTaskChanged={this.onTaskChanged} />
      </div>
    );
  }
```

Currently, the schema is tightly bound to simple, json object lists that have an id, title, description, and isCompleted boolean, but that's bound to change later when custom schema overrides are available.

## Starting Demo Application

The project leverages _nwb_ for tooling around development, so starting the demo from a local fork is as simple as running 'start'.

```bash
yarn start
```

## Contributing

The code isn't quite set up for contributing just yet since there's no tests for expected behavior. Once this is done, I'll redo this section, but until then it'll just be me working on this.
