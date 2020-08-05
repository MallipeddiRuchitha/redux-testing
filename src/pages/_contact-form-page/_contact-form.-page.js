import React from "react";
import Contact from "../../components/organisms/_contact-form/_contact-form";
import ContactList from "../../components/organisms/_contact-list/_contact-list";
import { Typography, Input } from "@material-ui/core";
import ContactFormTemplate from "../../components/templates/_contact-form-template/_contact-form-template";
const ContactForm = (  ) => {
  return <div data-testid="ContactFormPage">
  <ContactFormTemplate ></ContactFormTemplate>;
  </div>
};

export default ContactForm;
