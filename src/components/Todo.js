import React from "react";

// copied the first li from app.js so this component has something to return
//received the props from App.js here

export default function Todo(props) {
 return (
  <li className="todo stack-small">
    <div className="c-cb">
     <input
     id={props.id}
     type="checkbox"
     defaultChecked={props.completed}
     onChange={() => props.toggleTaskCompleted(props.id)}/>
{/* when the "Delete" button is pressed. deleteTask() needs to know the ID of the task that called it, so it can delete the correct task from the state. */}

          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button
           type="button"
           className="btn btn__danger"
           onClick={() => props.deleteTask(props.id)} >
           Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    );
  }
  
  