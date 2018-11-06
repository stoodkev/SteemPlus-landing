import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

const CustomButton = ({
  text,
  color1,
  color2,
  marginTop,
  marginBottom,
  href
}) => {
  const buttonStyle = {
    root: {
      fontSize: "1.25rem",
      marginTop: marginTop,
      marginBottom: marginBottom,
      backgroundColor: color1,
      color: color2,
      borderRadius: "30px",
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
