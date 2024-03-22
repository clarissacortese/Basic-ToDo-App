import Button from "./Button"

function Form() {
    function handleClick() {}

  return (
    <>
    <h2>Add a new to-do</h2>
    <form>
      <input type="text" placeholder="Enter your item" />
      <Button type="submit" className="submitButton" text="Add a new to-do" handleClick={handleClick()}></Button>
    </form>
    </>
  )
}

export default Form