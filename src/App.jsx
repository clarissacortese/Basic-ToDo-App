import { useState } from 'react'
import Form from './components/Form'
import TodoItemsList from './components/TodoItemsList'
import DoneItemsList from './components/DoneItemsList'

// The App component is the root component of the application.
// It maintains the state of the todos and done items and provides functions to manipulate this state.
function App() {
  // todos is an array of the current todos.
  // setTodos is a function to update the todos.
  const [todos, setTodos] = useState([]);

  // doneItems is an array of the done items.
  // setDoneItems is a function to update the done items.
  const [doneItems, setDoneItems] = useState([]);

  // addTodo is a function that adds a new todo to the todos array.
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  // addDone is a function that adds a new done item to the doneItems array.
  const addDone = (done) => {
    setDoneItems([...doneItems, done]);
  }

  // deleteTodo is a function that removes a todo from the todos array.
  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter(todo => todo !== todoToDelete));
  }

  // deleteDone is a function that removes a done item from the doneItems array.
  const deleteDone = (doneToDelete) => {
    setDoneItems(doneItems.filter(done => done !== doneToDelete));
  }

  // The component renders a title, a Form component, a TodoItemsList component, and a DoneItemsList component.
  // The addTodo, todos, deleteTodo, and addDone props are passed to the Form and TodoItemsList components.
  // The doneItems, deleteDone, and addTodo props are passed to the DoneItemsList component.
  return (
    <>
      <h1>Today&apos;s Todo List</h1>
      <Form addTodo={addTodo} />
      <TodoItemsList todos={todos} deleteTodo={deleteTodo} addDone={addDone}/>
      <DoneItemsList doneItems={doneItems} deleteDone={deleteDone} addTodo={addTodo}/>
    </>
  )
}

export default App