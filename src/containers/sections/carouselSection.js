import React from "react";
import { Grid } from "@material-ui/core";
import * as Const from "../../utils/const";

const style = {
  marginBottom: "3.5rem"
};

const titleStyle = {
  color: Const.TITLE_COLOR,
  textTransform: "uppercase"
};

const CarouselSection = ({ title, tag, children }) => (
  <div className="section carousel-section" style={style}>
    <h1 id={tag} style={titleStyle}>
      {title}
    </h1>
    <Grid container direction="row" justify="center" alignItems="center">
      {children}
    </Grid>
  </div>
);

export default CarouselSection;
