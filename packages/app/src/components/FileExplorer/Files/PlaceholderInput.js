import React from 'react';

const PlaceholderInput = (props) => {
  const inputRef = React.useRef();

  const handleEvent = (e) => {
    if (e.key === "Enter") {
      // onSubmit(e.target.value);
    } else if (e.key === "Escape") {
      // onCancel && onCancel();
    }
  };

  React.useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
    inputRef.current.addEventListener("keyup", handleEvent);

    return () => {
      inputRef.current.removeEventListener("keyup", handleEvent);
    }
  }, [inputRef]);

  return (
    <div>
      <input ref={inputRef}/>
    </div>
  );
};

export default PlaceholderInput;
