import { useState } from "react";

function Form() {
  const [todo, setTodo] = useState('Add your to-do here');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(todo);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setTodo(e.target.value);
  }


  return (
    <>
    <h2>Add a new to-do</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your item" value={todo} onChange={handleInputChange} />
      <button type="submit" className="submitButton">Add a new to-do</button>
    </form>
    </>
  )
}

export default Form