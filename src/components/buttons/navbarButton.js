import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

const NavbarButton = ({
  text,
  color1,
  color2,
  href,
  float,
  itemVisible,
  onClick,
  large,
  children
}) => {
  const buttonStyle = {
    root: {
      fontSize: large ? "large" : "inherit",
      transition: "1s",
      WebkitTransition: "1s" /* Safari 3.1 to 6.0 */,
      float: float,
      border: "none",
      backgroundColor: color1,
      color: color2,
      display: itemVisible ? "block !important" : "none !important",
      "&:hover": {
        backgroundColor: color2,
        color: color1
      }
    }
  };
  const CustomizedButton = withStyles(buttonStyle)(Button);
  return (
    <CustomizedButton href={href} onClick={onClick}>
      {children}
      {text}
    </CustomizedButton>
  );
};

export default NavbarButton;
