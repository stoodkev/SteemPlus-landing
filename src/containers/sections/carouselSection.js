import React from "react";
import Separator from "../../components/separator";
import { Grid } from "@material-ui/core";

const style = {
  marginTop: "3rem",
  marginBottom: "3rem"
};

const CarouselSection = ({ title, tag, children }) => (
  <div className="section carousel-section" style={style}>
    <h1 id={tag}>{title}</h1>
    <Separator position="center" />
    <Grid container direction="row" justify="center" alignItems="center">
      {children}
    </Grid>
  </div>
);

export default CarouselSection;
