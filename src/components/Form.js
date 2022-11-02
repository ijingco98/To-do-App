import React, { useState } from "react";
import Image from "./Head.png";
import Add from "./Add.png";


function Form(props) {
 const [name, setName] = useState("");

function handleSubmit(e) {
  if ( name === ""){
    alert ('The Task Cannot Be Empty')
}else {
      props.addTask(name);
      setName("");
    }
    e.preventDefault();
  }

function handleChange(e) {
  const newTask = props.tasks.find(task => task.name === e.target.value)
    if (newTask){
      alert('Seems Like Task Already Exists')
    }
      setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          <img src={Image} alt="head" height={70} className="headerImg"/>
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
      <img src={Add} alt="add" height={30}/>
      </button>
    </form>
    
  );
}
export default Form;

//we copied the form from app.js

