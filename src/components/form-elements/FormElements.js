import React from "react";
import s from "./FormElements.module.css";
import { Button } from "../ui";
import FormElement from "../form-element";

export default function FormElements() {
  return (
    <div className={s.FormElements}>
      <FormElement
        formElType="input"
        labelText="Name"
        fieldName="name"
        inputType="text"
        inputRequired="required"
      />
      <FormElement
        formElType="input"
        labelText="Email"
        inputName="email"
        inputType="email"
        inputRequired="required"
      />
      <FormElement
        formElType="textArea"
        labelText="Comment"
        fieldName="comment"
        cols="5"
      />
      <Button type="submit" text="Submit" />
    </div>
  );
}
