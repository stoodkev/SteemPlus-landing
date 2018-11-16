import React from "react";
import { Grid, withStyles } from "@material-ui/core/";
import * as Const from "../../utils/const";
import { LooksOne, LooksTwo, Looks3 } from "@material-ui/icons";

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

const iconStyle = {
  root: {
    color: Const.COLOR_BUTTON,
    width: "2rem",
    height: "2rem",
    marginBottom: "1rem"
  }
};

const CustomIconTopOne = withStyles(iconStyle)(LooksOne);
const CustomIconTopTwo = withStyles(iconStyle)(LooksTwo);
const CustomIconTopThree = withStyles(iconStyle)(Looks3);

const getIcon = position => {
  switch (position) {
    case 1:
      return <CustomIconTopOne />;
    case 2:
      return <CustomIconTopTwo />;
    case 3:
      return <CustomIconTopThree />;
    default:
      break;
  }
};

const RankingTopUser = ({ position, username, nbPoints }) => (
  <Grid
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
    {getIcon(position)}
    <img
      style={imgStyle}
      src={`https://steemitimages.com/u/${username}/avatar`}
      alt={username}
    />

    <span style={nameStyle}>{parseFloat(nbPoints).toFixed(2)} SPP</span>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`https://steemit.com/@${username}`}
      style={usernameStyle}
    >
      @{username}
    </a>
  </Grid>
);

export default RankingTopUser;
