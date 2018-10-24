import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";

const style = {
  marginTop: "5rem",
  backgroundColor: "white",
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0), rgba(90, 95, 102, 0.7), rgba(255, 255, 255, 0))",
  padding: "2.5rem 0 2.5rem 0"
};

const SectionLeftRight = ({ children, direction }) => (
  <div className="section" style={style}>
    <Grid
      container
      direction={direction}
      justify="space-evenly"
      alignItems="flex-start"
    >
      {children}
    </Grid>
  </div>
);

export default SectionLeftRight;
