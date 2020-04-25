import React, { Component } from "react";
import s from "./MailingList.module.css";
import { Form, Input, Button } from "../ui";

export default class MailingList extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      label: "",
    });
    alert(
      "Thank You For Subscribing! You will receive new recipes at your email: " +
        this.state.label
    );
  };

  render() {
    const { label } = this.state;
    return (
      <div className={s.MailingList}>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="email"
            onChange={this.onLabelChange}
            placeholder="Email"
            value={label}
          />
          <Button
            id="mailingListBtn"
            type="submit"
            text="Signup for our mailing list"
          />
        </Form>
      </div>
    );
  }
}
