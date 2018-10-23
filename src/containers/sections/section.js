import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";
import Separator from "../../components/separator";

const Section = ({ title, children }) => (
  <div className="section">
    <h1>{title}</h1>
    <Separator position="center" />
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

export default Section;
