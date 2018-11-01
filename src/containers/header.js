import React from "react";
import { Toolbar, Avatar, Grid } from "@material-ui/core/";
import NavbarButton from "../components/buttons/navbarButton";
import TitleApp from "../components/labels/titleApp";
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

const getNavItems = (navItems, isMainPage, setSubMenu, subMenu) => {
  console.log(subMenu);
  if (isMainPage) {
    return Object.keys(navItems).map((section, i) => (
      <Grid item xs={12} sm={12} md={12} lg="auto" key={i}>
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
            active={
              Formatter.tagFromTitle(navItems[section].sectionTitle) === subMenu
            }
            onClick={() =>
              setSubMenu(
                `${Formatter.tagFromTitle(navItems[section].sectionTitle)}`
              )
            }
          />
        </AnchorLink>
      </Grid>
    ));
  }
};

const Header = ({ page, setPage, setSubMenu, subMenu }) => {
  let navItems = null;
  navItems = Data.default;
  const isMainPage = page === "main";

  return (
    <div style={styleNavBar}>
      <ResponsiveMenu
        menuOpenButton={
          <NavbarButton color1="white" color2={Const.TITLE_COLOR} itemVisible>
            <Dehaze />
          </NavbarButton>
        }
        menuCloseButton={
          <NavbarButton color1={Const.TITLE_COLOR} color2="white" itemVisible>
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
            <Grid item xs={12} sm={12} md={12} lg="auto">
              <Toolbar>
                <Avatar srcSet="public/img/logo.png" />
                <TitleApp variant="title">SteemPlus</TitleApp>
              </Toolbar>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg="auto">
              <NavbarButton
                color1="white"
                color2={Const.TITLE_COLOR}
                text="Home"
                float="left"
                itemVisible
                large
                active={isMainPage === true}
                onClick={() => {
                  setPage("main");
                  setSubMenu("why-steemplus-?");
                }}
              />
            </Grid>
            {getNavItems(navItems, isMainPage, setSubMenu, subMenu)}
            <Grid item xs={12} sm={12} md={12} lg="auto">
              <NavbarButton
                color1="white"
                color2={Const.TITLE_COLOR}
                text="SPP"
                itemVisible
                large
                active={isMainPage === false}
                onClick={() => {
                  setPage("spp");
                  setSubMenu("spp");
                }}
              />
            </Grid>
          </Grid>
        }
      />
    </div>
  );
};

const mapStateToProps = state => ({
  page: state.nav.page
});
const mapDispatchToProps = dispatch => ({
  setPage: page => {
    dispatch({
      type: "SET_PAGE",
      payload: page
    });
  },
  setSubMenu: subMenu => {
    dispatch({
      type: "SET_SUB_MENU",
      payload: subMenu
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
