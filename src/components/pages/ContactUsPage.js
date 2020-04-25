import React, { Component } from "react";
import s from "./ContactUsPage.module.css";
import { Card } from "../ui";
import ContactUsForm from "../contact-us-form";

export default class ContactUsPage extends Component {
  render() {
    return (
      <div className={s.ContactUsPage}>
        <Card
          headText="Contact Us"
          headSize="1"
          text="Please fill out the form below and we will get back in touch with you."
          className={s.ContactUs}
        />
        <ContactUsForm />
      </div>
    );
  }
}
