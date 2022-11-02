import React, { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";


const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);
// This contains the keys of the Filter-map



function App(props) {
// Used props.tasks from index.js as the initial val of task. Used it on maping
//tasks' value now is the props.tasks from index
  const [tasks, setTasks] = useState(props.tasks);

  // For Filtering tasks
  //the default is all tasks
  const [filter, setFilter] = useState('All');

function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
        if (id === task.id) {
          // use object spread to make a new object
          // whose `completed` prop has been inverted
          return {...task, completed: !task.completed}
        }
        return task;
      });
      setTasks(updatedTasks);
    }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }


  const tasksNoun = taskList.length >= 2 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  return (
    <div className="todoapp stack-large">
      {/* <Form addTask={addTask} /> */}
      <Form addTask={addTask} tasks={tasks}/>


      <div className="filters btn-group stack-exception">
        {filterList}
      </div>

      <h2 id="list-heading">{headingText}</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;