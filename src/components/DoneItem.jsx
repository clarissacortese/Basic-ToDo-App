import Button from "./Button"

function DoneItem({text}) {

    function handleClick() {}
    
  return (
    <>
    <span>{text}</span>
    <Button className="repeatButton" text="Move to &quot;to-do&quot;" handleClick={handleClick}></Button>
    <Button className="deleteButton" text="Permanently delete" handleClick={handleClick}></Button>
    </>
  )
}

export default DoneItem