import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

const CustomButtonIcon = ({ text, color1, color2, margin, children, href }) => {
  if (margin === undefined) margin = "0";
  const buttonStyle = {
    root: {
      margin: margin,
      backgroundColor: color1,
      color: color2,
      borderRadius: "0 10px 10px 10px",
      "&:hover": {
        backgroundColor: color2,
        color: color1
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
