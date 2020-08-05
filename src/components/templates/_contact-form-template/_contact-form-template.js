import React from "react";
import Contact from "../../organisms/_contact-form/_contact-form";
import ContactList from "../../organisms/_contact-list/_contact-list";
import { Typography, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../../../assets/images/webpack-image.jpeg";
const useStyles = makeStyles((theme) => ({
  styleContactForm: {
    minHeight: "98vh",
    height: "auto",
    backgroundImage: `url(${Background})`,
    //"URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
}));
const ContactForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.styleContactForm} data-testid="ContactFormTemplate">
      <Contact  />
      <ContactList  />
    </div>
  );
};

export default ContactForm;
