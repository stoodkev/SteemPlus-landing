import React from "react";
import { Grid } from "@material-ui/core/";
import * as Const from "../utils/const";

const style = {};
const imgStyle = {
  maxHeight: "15rem",
  borderRadius: "0 10px 10px 10px",
  marginBottom: "1rem"
};

const nameStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: Const.COLOR_NAME_MEMBER,
  textDecoration: "none",
  fontFamily: "Roboto, sans-serif",
  textTransform: "uppercase"
};

const usernameStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: Const.COLOR_USERNAME_MEMBER,
  textDecoration: "none"
};

const positionStyle = {
  fontSize: "1rem",
  fontWeight: "300",
  color: Const.COLOR_POSITION_MEMBER
};

const MemberPanel = ({ name, position, username }) => (
  <Grid
    style={style}
    className="memberPanel"
    item
    xs={12}
    sm={6}
    md={3}
    lg={3}
    container
    direction="column"
    justify="space-evenly"
    alignItems="center"
  >
    <img
      style={imgStyle}
      className="imgMember"
      src={`public/img/teamMembers/${username}.png`}
      alt={name}
    />

    <span style={nameStyle}>{name}</span>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`https://steemit.com/@${username}`}
      style={usernameStyle}
    >
      @{username}
    </a>
    <span style={positionStyle}>{position}</span>
  </Grid>
);

export default MemberPanel;
