import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Input, TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginBottom: "20px",
  },
}));

const InputField = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.styleInputFields} data-testid="input">
      <Input
        value={value}
        style={{ color: "#000" }}
        onChange={onChange}
        required
        inputProps={{ "data-testid": "value" }}
        //data-testid="input"
      />
    </div>
  );
};

export default InputField;
