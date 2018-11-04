import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";
import * as Const from "../../utils/const";

const Section = ({
  title,
  tag,
  background1,
  background2,
  noSeparator,
  children
}) => {
  const titleStyle = {
    color: Const.TITLE_COLOR,
    textTransform: "uppercase"
  };
  const style = {
    backgroundImage: `linear-gradient(to right, ${background1}, ${background2})`
  };

  return (
    <div className="section" style={style}>
      <h1 id={tag} style={titleStyle}>
        {title}
      </h1>
      <Grid
        container
        direction="row"
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
