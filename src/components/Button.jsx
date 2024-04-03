/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaUndoAlt } from "react-icons/fa";

// The Button component is a reusable button component.
// It receives four props: className (the CSS class of the button), text (the text displayed on the button), handleClick (the function to call when the button is clicked), and type (the type of the button).
function Button({ className, type, handleClick }) {
  // The component renders a button element with the provided className, text, and type.
  // When the button is clicked, the handleClick function is called.
  if (type === "delete") {
        return (
          <button className={className} onClick={handleClick}>
            <MdDelete/>
          </button>
        );
      } else if (type === "done") {
        return (
          <button className={className} onClick={handleClick}>
            <FaCheck/>
          </button>
        );
      } else {
        return (
          <button className={className} onClick={handleClick}>
            <FaUndoAlt/>
          </button>
        );
      }
}

export default Button;
