import React from "react";
import { Input, Label, TextArea } from "../ui";
import s from "./FormElement.module.css";

export default function FormElement({
  formElType,
  labelText,
  fieldName,
  inputType,
  cols,
  inputRequired,
}) {
  let element = "";
  console.log(formElType);
  if (formElType === "input") {
    element = (
      <Input
        type={inputType}
        id={fieldName}
        name={fieldName}
        required={inputRequired}
      />
    );
  } else if (formElType === "textArea") {
    element = <TextArea id={fieldName} cols={cols} name={fieldName} />;
  }

  return (
    <div className={s.FormElement}>
      <Label htmlFor={fieldName} text={labelText} />
      <span>{element}</span>
    </div>
  );
}
