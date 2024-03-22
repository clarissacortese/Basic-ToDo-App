/* eslint-disable react/prop-types */

// The Button component is a reusable button component.
// It receives four props: className (the CSS class of the button), text (the text displayed on the button), handleClick (the function to call when the button is clicked), and type (the type of the button).
function Button({ className, text, handleClick, type }) {
  // The component renders a button element with the provided className, text, and type.
  // When the button is clicked, the handleClick function is called.
  return (
    <button type={type} className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button