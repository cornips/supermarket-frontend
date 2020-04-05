import React from "react";
import { Background, Label, Input } from "./Fields.style";

const InputField = props => {
  const { name, label, type, attributes, icon, callback } = props;

  const iconObject = () => (icon ? icon : null);
  const input = (
    <Background>
      <Input
        name={name}
        type={type}
        onChange={callback}
        onKeyUp={callback}
        {...attributes}
      />
    </Background>
  );
  let inputGroup;
  if (icon)
    inputGroup = (
      <div className="has-icon">
        {iconObject()}
        {input}
      </div>
    );
  else inputGroup = input;

  return (
    <Label>
      <span>{label}</span>
      {inputGroup}
    </Label>
  );
};

export default InputField;
