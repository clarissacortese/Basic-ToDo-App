/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

// The TodoItemsList component is responsible for rendering a list of TodoItem components.
// It receives three props: todos, deleteTodo, and addDone.
function TodoItemsList({ todos, deleteTodo, addDone }) {
  // If the todos array has at least one item, render the list of todos.
  if (todos.length > 0) {
    return (
      <div className="flex flex-col items-start mb-4">
        <h2 className="text-left">Remeber to...</h2>
        <ul>
          {/* For each todo in the todos array, render a TodoItem component. */}
          {/* The todo, deleteTodo, and addDone props are passed to each TodoItem. */}
          {todos.map((todo, index) => (
            <li key={index}>
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                addDone={addDone}
              ></TodoItem>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    // If the todos array is empty, render a message encouraging the user to add a todo.
    return <h2 className="text-left mb-4">Nothing to do! Add something...</h2>;
  }
}

export default TodoItemsList;
