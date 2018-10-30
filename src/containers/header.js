import React from "react";
import NavbarButton from "../components/buttons/navbarButton";
import TitleApp from "../components/labels/titleApp";
import { AppBar, Toolbar, Avatar } from "@material-ui/core/";
import "../css/containers/header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as Data from "../jsons/data.json";
import * as Formatter from "../utils/formatter";
import * as Const from "../utils/const";
import { connect } from "react-redux";

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

const getNavItems = (navItems, isMainPage) => {
  if (navItems)
    return Object.keys(navItems).map((section, i) => (
      <AnchorLink
        href={`#${Formatter.tagFromTitle(navItems[section].sectionTitle)}`}
        style={anchorStyle}
        key={i}
      >
        <NavbarButton
          color1="white"
          color2={Const.TITLE_COLOR}
          text={navItems[section].sectionTitle}
          float="left"
          itemVisible={isMainPage === true}
        />
      </AnchorLink>
    ));
};

const Header = ({ page, setPage }) => {
  let navItems = null;
  navItems = Data.default;
  let isMainPage = page === "main";

  return (
    <div>
      <AppBar position="sticky" className="navbar">
        <Toolbar>
          <Avatar srcSet="/img/logo.png" />
          <TitleApp variant="title">SteemPlus</TitleApp>
          <div style={{ width: "100%" }}>
            <NavbarButton
              color1="white"
              color2={Const.TITLE_COLOR}
              text="Home"
              float="left"
              itemVisible={isMainPage === false}
              onClick={() => setPage("main")}
            />
            {getNavItems(navItems, isMainPage)}
            <NavbarButton
              color1="white"
              color2={Const.TITLE_COLOR}
              text="SPP"
              float="right"
              itemVisible={isMainPage === true}
              onClick={() => {
                setPage("spp");
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    page: state.nav.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setPage: page => {
      dispatch({
        type: "SET_PAGE",
        payload: page
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
