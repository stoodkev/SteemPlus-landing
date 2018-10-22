import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@material-ui/core/";
import "../css/containers/header.css";

const Header = () => (
  <div>
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        <Avatar srcSet="/img/logo.png" />
        <Typography variant="title" color="primary">
          SteemPlus
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
