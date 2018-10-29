import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Slide } from "@material-ui/core/";

const NavbarButton = ({
  text,
  color1,
  color2,
  href,
  float,
  itemVisible,
  onClick
}) => {
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
  return (
    <Slide direction="up" in={itemVisible}>
      <CustomizedButton href={href} onClick={onClick}>
        {text}
      </CustomizedButton>
    </Slide>
  );
};

export default NavbarButton;
