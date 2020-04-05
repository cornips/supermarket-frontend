import React from "react";
import { Label, Select, SelectBox } from "./Fields.style";
import { ReactComponent as CaretSymbol } from "./assets/caret.svg";

const SelectField = props => {
  const { name, label, options, attributes, callback } = props;

  return (
    <Label>
      <span>{label}</span>
      <SelectBox>
        <Select name={name} onChange={callback} {...attributes}>
          {Object.entries(options).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </Select>
        <CaretSymbol />
      </SelectBox>
    </Label>
  );
};

export default SelectField;
