import React from "react";
import { Grid } from "@material-ui/core";
import * as Const from "../../utils/const";

const style = {
  marginBottom: "3.5rem"
};

const titleStyle = {
  color: Const.TITLE_COLOR,
  textTransform: "uppercase",
  fontSize: "2rem",
  fontFamily: "Montserrat",
  fontWeight: "600",
  margin: "0px",
  marginBottom: "3.5rem"
};

const CarouselSection = ({ title, tag, children }) => (
  <div className="section carousel-section" style={style}>
    <p id={tag} style={titleStyle}>
      {title}
    </p>
    <Grid container direction="row" justify="center" alignItems="center">
      {children}
    </Grid>
  </div>
);

export default CarouselSection;
