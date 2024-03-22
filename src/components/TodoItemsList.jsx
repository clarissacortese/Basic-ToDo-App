import TodoItem from "./TodoItem"

function TodoItemsList() {
  return (
    <>
    <h2>Remeber to...</h2>
    <ul>
      <li><TodoItem text="Test"></TodoItem></li>
      <li><TodoItem text="Test"></TodoItem></li>
      <li><TodoItem text="Test"></TodoItem></li>
    </ul>
    </>
  )
}

export default TodoItemsList