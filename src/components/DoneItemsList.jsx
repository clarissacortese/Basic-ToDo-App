/* eslint-disable react/prop-types */
import DoneItem from "./DoneItem"

// The DoneItemsList component is responsible for rendering a list of DoneItem components.
// It receives three props: doneItems (an array of done items), deleteDone (a function to delete a done item), and addTodo (a function to move a done item back to the todo list).
function DoneItemsList({doneItems, deleteDone, addTodo}) {
  
  // If the doneItems array has at least one item, render the list of done items.
  if (doneItems.length > 0) {
    return (
      <>
          <h2>The already-done list:</h2>
          <ul>
          {/* For each done item in the doneItems array, render a DoneItem component. */}
          {/* The done, deleteDone, and addTodo props are passed to each DoneItem. */}
          {doneItems.map((done, index) => (
          <li key={index}><DoneItem done={done} deleteDone={deleteDone} addTodo={addTodo}></DoneItem></li>
        ))}
          </ul>
      </>
    )
  } else {
    // If the doneItems array is empty, render an empty fragment.
    return (
      <></>
    )
  }
}

export default DoneItemsList