import Button from "./Button"

function TodoItem({text}) {

    function handleClick() {}

  return (
    <>
    <span>{text}</span>
    <Button className="doneButton" text="Done" handleClick={handleClick()}></Button>
    <Button className="deleteButton" text="Delete" handleClick={handleClick()}></Button>
    </>
  )
}

export default TodoItem