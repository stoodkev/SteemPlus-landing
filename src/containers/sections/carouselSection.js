import React from "react";
import Separator from "../../components/separator";
import { Grid } from "@material-ui/core";

const CarouselSection = ({ title, children }) => (
  <div className="section">
    <h1>{title}</h1>
    <Separator position="center" />
    <Grid container direction="row" justify="center" alignItems="center">
      {children}
    </Grid>
  </div>
);

export default CarouselSection;
