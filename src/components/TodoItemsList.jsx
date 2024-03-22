import TodoItem from "./TodoItem"

function TodoItemsList() {

  const todos = ["test1", "test2", "test3"];

  return (
    <>
    <h2>Remeber to...</h2>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}><TodoItem text={todo}></TodoItem></li>
      ))}
    </ul>
    </>
  )
}

export default TodoItemsList