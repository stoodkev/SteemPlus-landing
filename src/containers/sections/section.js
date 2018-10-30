import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";
import Separator from "../../components/separator";

const Section = ({
  title,
  tag,
  background1,
  background2,
  noSeparator,
  children
}) => {
  const style = {
    backgroundImage: `linear-gradient(to right, ${background1}, ${background2})`
  };

  return (
    <div className="section" style={style}>
      <h1 id={tag}>{title}</h1>
      {noSeparator ? "" : <Separator position="center" />}
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
