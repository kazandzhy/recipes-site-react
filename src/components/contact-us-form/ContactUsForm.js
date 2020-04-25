import React from "react";
import s from "./ContactUsForm.module.css";
import { Form } from "../ui";
import FormElements from "../form-elements";

export default function ContactUsForm() {
  const onSubmit = () => {
    alert(
      "The form has been successfully submitted and we will contact you soon!"
    );
  };
  return (
    <div className={s.ContactUsForm}>
      <Form onSubmit={onSubmit}>
        <fieldset>
          <FormElements />
        </fieldset>
      </Form>
    </div>
  );
}
