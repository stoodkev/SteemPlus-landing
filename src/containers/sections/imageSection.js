import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";
import * as Const from "../../utils/const";

const ImageSection = ({ title, tag, src, children, justify }) => {
  const titleStyle = {
    color: Const.TITLE_COLOR,
    textTransform: "uppercase"
  };
  const style = {
    backgroundImage: `url(public/img/${src})`
  };

  return (
    <div className="section">
      <h1 id={tag} style={titleStyle}>
        {title}
      </h1>
      <Grid
        container
        direction="row"
        justify={justify || "space-evenly"}
        alignItems="center"
        spacing={24}
        style={style}
      >
        {children}
      </Grid>
    </div>
  );
};

export default ImageSection;
