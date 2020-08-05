import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as contactAction from "../../../redux/actions/contactAction";
import { makeStyles } from "@material-ui/core/styles";

import { Typography, FormControl, Divider } from "@material-ui/core";

import Button from "../../atoms/_button/_button";
import { myTheme } from "../../../theme";
import Input from "../../atoms/_input/_input";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  styleContactMainContent: {
    display: "flex",
    justifyContent: "center",
  },
  styleHeading: {
    paddingLeft: "auto",
    paddingRight: "auto",
  },
  forms: {
    //backgroundColor: myTheme.palette.secondary.main,

    color: "black",

    margin: "auto",
    paddingTop: "20px",
    marginTop: "20px",
  },
  input: {
    paddingBottom: "10px",
    //paddingLeft: "15%",
  },
  heading: {
    // paddingLeft: "20%",
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  button: {
    //paddingLeft: "%",
  },
  error: {
    color: myTheme.palette.myColor.redColor,
  },
}));

const ContactMainContent = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  //console.log("list", props.contacts);

  const handleContactChange = (event) => {
    event.preventDefault();
    const name = event.target.value;
    setName(name);
  };
  const handleEmailChange = (event) => {
    event.preventDefault();
    const email = event.target.value;
    setEmail(email);
  };
  const handleClick = (event) => {
    event.preventDefault(
      
    );
    const action = contactAction.createContact(name, email);
    console.log("action******", action);
    dispatch(action);
    setName("");
    setEmail("");
  };

  return (
    <div className={classes.styleContactMainContent} data-testid="contactform">
      <div className={classes.forms}>
        <Typography variant="h4"> Contacts Application</Typography>
        <Typography variant="h5" className={classes.heading}>
          Add Contact Form
        </Typography>
        <form>
          <div className={classes.input}>
            <Typography variant="h6">Contact Name</Typography>

            <Input onChange={handleContactChange} value={name}></Input>
            <Typography variant="h6">Email</Typography>
            <Input onChange={handleEmailChange} value={email}></Input>
            <div className={classes.button}>
              <Button value="Save" onClick={handleClick}>
                {" "}
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Divider></Divider>
    </div>
  );
};

export default ContactMainContent;
