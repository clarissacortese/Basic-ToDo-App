import DoneItem from "./DoneItem"

function DoneItemsList() {
  return (
    <>
        <h2>The already-done list:</h2>
        <ul>
        <li><DoneItem text="Test"></DoneItem></li>
        <li><DoneItem text="Test"></DoneItem></li>
        <li><DoneItem text="Test"></DoneItem></li>
        </ul>
    </>
  )
}

export default DoneItemsList