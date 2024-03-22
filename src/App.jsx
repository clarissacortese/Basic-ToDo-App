//import { useState } from 'react'
import Form from './components/Form'
import TodoItemsList from './components/TodoItemsList'
import DoneItemsList from './components/DoneItemsList'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>Today&apos;s Todo List</h1>
      <Form/>
      <TodoItemsList/>
      <DoneItemsList/>
    </>
  )
}

export default App
