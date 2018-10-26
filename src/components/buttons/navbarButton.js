import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

const NavbarButton = ({ text, color1, color2, href, float }) => {
  const buttonStyle = {
    root: {
      float: float,
      border: "none",
      backgroundColor: color1,
      color: color2,
      "&:hover": {
        backgroundColor: color2,
        color: color1
      }
    }
  };
  const CustomizedButton = withStyles(buttonStyle)(Button);
  return <CustomizedButton href={href}>{text}</CustomizedButton>;
};

export default NavbarButton;
