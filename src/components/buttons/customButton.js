import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

const CustomButton = ({ text, color, marginTop, href }) => {
  const buttonStyle = {
    root: {
      marginTop: marginTop,
      backgroundColor: color,
      color: "white",
      borderRadius: "0 10px 10px 10px",
      "&:hover": {
        backgroundColor: "white",
        color: color
      }
    }
  };
  const CustomizedButton = withStyles(buttonStyle)(Button);
  return (
    <CustomizedButton variant="contained" href={href} target="_blank">
      {text}
    </CustomizedButton>
  );
};

export default CustomButton;
