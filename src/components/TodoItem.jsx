/* eslint-disable react/prop-types */
import Button from "./Button";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

// The TodoItem component is responsible for rendering a single todo item.
// It receives three props: todo (the text of the todo), deleteTodo (a function to delete the todo), and addDone (a function to mark the todo as done).
function TodoItem({ todo, deleteTodo, addDone }) {
  // handleDone is the function that is called when the "Done" button is clicked.
  // It calls addDone with the todo to mark it as done, and then calls deleteTodo to remove it from the list of todos.
  function handleDone() {
    addDone(todo);
    deleteTodo(todo);
  }

  // handleDelete is the function that is called when the "Delete" button is clicked.
  // It calls deleteTodo with the todo to remove it from the list of todos.
  function handleDelete() {
    deleteTodo(todo);
  }

  // The component renders the text of the todo and two buttons: "Done" and "Delete".
  // When the "Done" button is clicked, handleDone is called.
  // When the "Delete" button is clicked, handleDelete is called.
  return (
    <div className="my-2">
      <MdCheckBoxOutlineBlank className="inline mr-2" />
      {todo}
      <Button
        className="ml-2 rounded bg-teal-900 py-2 px-2 text-center text-white align-middle shadow-md shadow-gray-700/20 transition-all hover:shadow-none"
        type="done"
        handleClick={handleDone}
      ></Button>
      <Button
        className="ml-2 rounded bg-red-900 py-2 px-2 text-center text-white align-middle shadow-md shadow-gray-700/20 transition-all hover:shadow-none"
        type="delete"
        handleClick={handleDelete}
      ></Button>
    </div>
  );
}

export default TodoItem;
