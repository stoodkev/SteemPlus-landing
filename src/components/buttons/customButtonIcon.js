import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

const CustomButtonIcon = ({ text, color, margin, children, href }) => {
  if (margin === undefined) margin = "0";
  const buttonStyle = {
    root: {
      margin: margin,
      backgroundColor: color,
      color: "white",
      borderRadius: "0 10px 10px 10px",
      "&:hover": {
        backgroundColor: "white",
        color: color
      },
      "&:first-child": {
        marginLeft: 0
      },
      "&:last-child": {
        marginRight: 0
      }
    }
  };
  const CustomizedButton = withStyles(buttonStyle)(Button);
  return (
    <CustomizedButton variant="contained" href={href} target="_blank">
      {children}
      {text}
    </CustomizedButton>
  );
};

export default CustomButtonIcon;
