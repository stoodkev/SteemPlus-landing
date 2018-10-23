import React from "react";
import { Grid } from "@material-ui/core/";

const style = {};
const imgStyle = {
  maxHeight: "15rem",
  borderRadius: "0 10px 10px 10px"
};

const Image = ({ name, src }) => (
  <Grid style={style} className="memberPanel" item xs={12} sm={6} md={4} lg={4}>
    <img style={imgStyle} className="imgSteemplus" src={src} alt={name} />
  </Grid>
);

export default Image;
