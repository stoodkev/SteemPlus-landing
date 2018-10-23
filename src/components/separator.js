import React from "react";
import { Grid } from "@material-ui/core/";
import "../css/components/separator.css";

const Separator = ({ position }) => (
  <Grid container direction="row" justify={position} alignItems="center">
    <div className="separator" />
  </Grid>
);

export default Separator;
