/* eslint-disable react/prop-types */

// The Form component is responsible for rendering a form that allows the user to add a new todo.
// It receives a function `addTodo` as a prop, which is called with the new todo when the form is submitted.
function Form({ addTodo }) {
  // handleSubmit is the function that is called when the form is submitted.
  // It prevents the default form submission behavior, gets the value of the input, clears the input, and calls `addTodo` with the new todo.
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const value = input.value;
    input.value = "";
    addTodo(value);
  };

  // The component renders a form with an input and a submit button.
  // When the form is submitted, `handleSubmit` is called.
  return (
    <>
      <h2>Add a new to-do</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add todo" required />
        <button type="submit" className="submitButton">
          Add
        </button>
      </form>
    </>
  );
}

export default Form;
