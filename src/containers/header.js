import React from "react";
import NavbarButton from "../components/buttons/navbarButton";
import TitleApp from "../components/labels/titleApp";
import { Toolbar, Avatar, Grid } from "@material-ui/core/";
import "../css/containers/header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as Data from "../jsons/data.json";
import * as Formatter from "../utils/formatter";
import * as Const from "../utils/const";
import { connect } from "react-redux";
import ResponsiveMenu from "react-responsive-navbar";
import { Dehaze } from "@material-ui/icons";

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

const styleNavBar = {
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  boxShadow:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
};

const getNavItems = (navItems, isMainPage) => {
  if (isMainPage)
    return Object.keys(navItems).map((section, i) => (
      <Grid item xs={12} sm={12} md={12} lg={"auto"} key={i}>
        <AnchorLink
          href={`#${Formatter.tagFromTitle(navItems[section].sectionTitle)}`}
          style={anchorStyle}
        >
          <NavbarButton
            color1="white"
            color2={Const.TITLE_COLOR}
            text={navItems[section].sectionTitle}
            float="left"
            itemVisible={isMainPage === true}
          />
        </AnchorLink>
      </Grid>
    ));
};

const Header = ({ page, setPage }) => {
  let navItems = null;
  navItems = Data.default;
  let isMainPage = page === "main";

  return (
    <div style={styleNavBar}>
      <ResponsiveMenu
        menuOpenButton={
          <NavbarButton
            color1="white"
            color2={Const.TITLE_COLOR}
            itemVisible={true}
          >
            <Dehaze />
          </NavbarButton>
        }
        menuCloseButton={
          <NavbarButton
            color1={Const.TITLE_COLOR}
            color2="white"
            itemVisible={true}
          >
            <Dehaze />
          </NavbarButton>
        }
        changeMenuOn="1024px"
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
        menu={
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={"auto"}>
              <Toolbar>
                <Avatar srcSet="/img/logo.png" />
                <TitleApp variant="title">SteemPlus</TitleApp>
              </Toolbar>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={"auto"}>
              <NavbarButton
                color1="white"
                color2={Const.TITLE_COLOR}
                text="Home"
                float="left"
                itemVisible={true}
                large={true}
                onClick={() => setPage("main")}
              />
            </Grid>
            {getNavItems(navItems, isMainPage)}
            <Grid item xs={12} sm={12} md={12} lg={"auto"}>
              <NavbarButton
                color1="white"
                color2={Const.TITLE_COLOR}
                text="SPP"
                itemVisible={true}
                large={true}
                onClick={() => {
                  setPage("spp");
                }}
              />
            </Grid>
          </Grid>
        }
      />
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
