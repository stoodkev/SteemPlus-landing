import React from "react";
import { Grid } from "@material-ui/core/";

const style = {};
const imgStyle = {
  maxHeight: "15rem",
  borderRadius: "0 10px 10px 10px"
};
const nameStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#3c4a97"
};
const positionStyle = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "grey"
};

const MemberPanel = ({ name, position }) => (
  <Grid
    style={style}
    className="memberPanel"
    item
    xs={12}
    sm={6}
    md={4}
    lg={4}
    container
    direction="column"
    justify="space-evenly"
    alignItems="center"
  >
    <img
      style={imgStyle}
      className="imgMember"
      src={`../../img/teamMembers/${name.toLowerCase()}.png`}
      alt={name}
    />
    <span style={nameStyle}>{name}</span>
    <span style={positionStyle}>{position}</span>
  </Grid>
);

export default MemberPanel;
