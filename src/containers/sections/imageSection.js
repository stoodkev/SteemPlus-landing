import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";
import * as Const from "../../utils/const";

const ImageSection = ({ title, tag, src, children, justify }) => {
  const titleStyle = {
    color: Const.TITLE_COLOR,
    textTransform: "uppercase"
  };
  const styleImage = {
    backgroundImage: `url(public/img/${src})`
  };

  const style = {
    marginBottom: "3.5rem"
  };

  return (
    <div className="section" style={style}>
      <h1 id={tag} style={titleStyle}>
        {title}
      </h1>
      <Grid
        container
        direction="row"
        justify={justify || "space-evenly"}
        alignItems="center"
        spacing={24}
        style={styleImage}
      >
        {children}
      </Grid>
    </div>
  );
};

export default ImageSection;
