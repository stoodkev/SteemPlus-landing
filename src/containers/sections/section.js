import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";
import * as Const from "../../utils/const";

const Section = ({
  title,
  tag,
  background,
  direction,
  marginBottom,
  children
}) => {
  const titleStyle = {
    color: Const.TITLE_COLOR,
    textTransform: "uppercase",
    fontSize: "2rem",
    fontFamily: "Montserrat",
    fontWeight: "600",
    margin: "0px"
  };
  const style = {
    background: background,
    marginBottom: marginBottom || "3.5rem",
    padding: "2.5rem"
  };

  return (
    <div className="section" style={style}>
      <p id={tag} style={titleStyle}>
        {title}
      </p>
      <Grid
        container
        direction={direction || "row"}
        justify="space-evenly"
        alignItems="center"
        spacing={24}
      >
        {children}
      </Grid>
    </div>
  );
};

export default Section;
