import DoneItem from "./DoneItem"

function DoneItemsList() {
  const doneItems = ["Learn React", "Learn JavaScript", "Learn TypeScript", "Learn Redux"]

  return (
    <>
        <h2>The already-done list:</h2>
        <ul>
        {doneItems.map((done, index) => (
        <li key={index}><DoneItem text={done}></DoneItem></li>
      ))}
        </ul>
    </>
  )
}

export default DoneItemsList