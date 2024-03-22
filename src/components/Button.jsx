function Button({ className, text, handleClick, type }) {
    return (
      <button type={type} className={className} onClick={handleClick}>
        {text}
      </button>
    );
  }
export default Button