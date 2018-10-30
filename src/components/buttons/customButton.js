import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

const CustomButton = ({ text, color1, color2, marginTop, href }) => {
  const buttonStyle = {
    root: {
      marginTop: marginTop,
      backgroundColor: color1,
      color: color2,
      borderRadius: "0 10px 10px 10px",
      "&:hover": {
        backgroundColor: color2,
        color: color1
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
