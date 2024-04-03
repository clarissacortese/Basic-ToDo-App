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
    <div className="flex flex-col justify-center items-center mt-4 mb-6">
      <form onSubmit={handleSubmit} className="relative w-full max-w-[50%]">
        <input type="text" placeholder="Add todo" required className="peer h-full w-full rounded-[7px] border border-gray-500 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 focus:border-1 focus:border-gray-900 focus:outline-0"/>
        <button type="submit" className="!absolute right-1 top-1 rounded bg-teal-900 py-2 px-4 text-center text-white align-middle font-sans text-xs font-bold uppercase shadow-md shadow-gray-700/20 transition-all hover:shadow-lg hover:shadow-gray-700/40 focus:shadow-none active:shadow-none">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;