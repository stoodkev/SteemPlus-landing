import React from "react";
import { Grid } from "@material-ui/core/";
import CustomButton from "../buttons/customButton";
import Separator from "../../components/separator";

const styleTitle = {
  fontSize: "2em",
  marginBottom: "1.25rem",
  fontWeight: "bold",
  color: "#3c4a97"
};

const Description = ({ children, title }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={4}
    lg={4}
    container
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    className="description"
  >
    <span style={styleTitle}>{title}</span>
    <Separator position="flex-start" />
    {children}
  </Grid>
);

export default Description;
