/* eslint-disable react/prop-types */
import Button from "./Button";
import { MdOutlineCheckBox } from "react-icons/md";

// The DoneItem component is responsible for rendering a single done item.
// It receives three props: done (the text of the done item), deleteDone (a function to delete the done item), and addTodo (a function to move the done item back to the todo list).
function DoneItem({ done, deleteDone, addTodo }) {
  // handleMove is the function that is called when the "Move to to-do" button is clicked.
  // It calls addTodo with the done item to move it back to the todo list, and then calls deleteDone to remove it from the done list.
  function handleMove() {
    addTodo(done);
    deleteDone(done);
  }

  // handleDelete is the function that is called when the "Delete" button is clicked.
  // It calls deleteDone with the done item to remove it from the done list.
  function handleDelete() {
    deleteDone(done);
  }

  // The component renders the text of the done item and two buttons: "Move to to-do" and "Delete".
  // When the "Move to to-do" button is clicked, handleMove is called.
  // When the "Delete" button is clicked, handleDelete is called.
  return (
    <div className="my-2">
      <MdOutlineCheckBox className="inline mr-2" />
      {done}
      <Button
        className="ml-2 rounded bg-teal-900 py-2 px-2 text-center text-white align-middle shadow-md shadow-gray-700/20 transition-all hover:shadow-none"
        type='move to to-do'
        handleClick={handleMove}
      ></Button>
      <Button
        className="ml-2 rounded bg-red-900 py-2 px-2 text-center text-white align-middle shadow-md shadow-gray-700/20 transition-all hover:shadow-none"
        type="delete"
        handleClick={handleDelete}
      ></Button>
    </div>
  );
}

export default DoneItem;
