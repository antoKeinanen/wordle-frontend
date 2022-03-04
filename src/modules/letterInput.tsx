import React from "react";
import "./styles/letterInput.css";

const LetterInput = (props: any) => {
  return (
    <input
      className="letterInput"
      maxLength={1}
      autoComplete="new-password"
      onChange={props.onChange}
      disabled={props.disabled}
      value={props.content}
      id={`name-${props.index}`}
      name={`name${props.index}`}
      ref={(c) => (props.inputs[props.index] = c)}
    />
  );
};

export default LetterInput;
