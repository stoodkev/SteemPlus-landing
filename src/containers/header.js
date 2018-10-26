import React from "react";
import NavbarButton from "../components/buttons/navbarButton";
import TitleApp from "../components/labels/titleApp";
import { AppBar, Toolbar, Avatar } from "@material-ui/core/";
import "../css/containers/header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as Data from "../jsons/data.json";
import * as Formatter from "../utils/formatter";
import { NavLink } from "react-router-dom";
import * as Const from "../utils/const";

const anchorStyle = {
  textDecoration: "none",
  textTransform: "uppercase",
  color: Const.TITLE_COLOR,
  fontSize: "0.875rem",
  fontWeight: "500",
  fontFamily: "Roboto",
  padding: "1rem",
  background: "white",
  "&:hover": {
    color: "blue",
    background: "white",
    borderRadius: "10px"
  }
};

const Header = () => (
  <div>
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        <Avatar srcSet="/img/logo.png" />
        <TitleApp variant="title">SteemPlus</TitleApp>
        <div style={{ width: "100%" }}>
          {Object.keys(Data.default).map((section, i) => (
            <AnchorLink
              href={`#${Formatter.tagFromTitle(
                Data.default[section].sectionTitle
              )}`}
              style={anchorStyle}
              key={i}
            >
              <NavbarButton
                color1="white"
                color2={Const.TITLE_COLOR}
                text={Data.default[section].sectionTitle}
                float="left"
              />
            </AnchorLink>
          ))}
          <NavLink to="/spp">
            <NavbarButton
              color1="white"
              color2={Const.TITLE_COLOR}
              text="SPP"
              float="right"
            />
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
