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
  padding: "0.5rem",
  background: "white",
  "&:hover": {
    color: "blue",
    background: "white",
    borderRadius: "10px"
  }
};

const styleNavBar = {
  zIndex: 1,
  background: "white",
  position: "relative",
  width: "100%",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  boxShadow:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
};

const styleNavBarSticky = {
  zIndex: 1,
  position: "fixed",
  top: 0,
  background: "white",
  width: "100%",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  boxShadow:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
};

const getNavItems = (navItems, isMainPage, setSubMenu, activeSubElement) => {
  if (isMainPage) {
    return Object.keys(navItems).map((section, i) => (
      <Grid item xs={12} sm={12} md={12} lg="auto" key={i}>
        <AnchorLink
          offset={() => 100}
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
              Formatter.tagFromTitle(navItems[section].sectionTitle) ===
              activeSubElement
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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navItems = Data.default;
    this.page = props.page;
    this.setPage = props.setPage;
    this.setSubMenu = props.setSubMenu;
    this.subMenu = props.subMenu;

    this.isMainPage = this.page === "main";

    this.state = {
      activePage: this.page,
      activeSubElement: this.subMenu,
      sticky: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const banner = document.getElementById("banner");
    const sticky = banner.height;

    if (window.pageYOffset >= sticky) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }

    let keys = Object.keys(this.navItems);
    let minDiff = window.pageYOffset;
    let currentSection = "";
    for (let i = keys.length - 1; i >= 0; i--) {
      const htmlItem = document.getElementById(
        `${Formatter.tagFromTitle(this.navItems[keys[i]].sectionTitle)}`
      );
      const offset = htmlItem.offsetTop;
      const diff = Math.abs(window.pageYOffset - offset);
      if (minDiff > diff) {
        minDiff = diff;
        currentSection = Formatter.tagFromTitle(
          this.navItems[keys[i]].sectionTitle
        );
      }
      console.log(
        window.pageYOffset,
        offset,
        this.navItems[keys[i]].sectionTitle
      );
    }
    console.log("------------------");
    this.setState({
      activeSubElement: currentSection
    });
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page)
      this.setState({ activePage: this.props.page });
    if (prevProps.subMenu !== this.props.subMenu)
      this.setState({ activeSubElement: this.props.subMenu });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div
        id="navbar"
        style={this.state.sticky ? styleNavBarSticky : styleNavBar}
      >
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
                  <Avatar srcSet="../public/img/logo.png" />
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
                  active={this.state.activePage === "main"}
                  onClick={() => {
                    this.setPage("main");
                    this.setSubMenu("why-steemplus-?");
                  }}
                />
              </Grid>
              {getNavItems(
                this.navItems,
                this.isMainPage,
                this.setSubMenu,
                this.state.activeSubElement
              )}
              <Grid item xs={12} sm={12} md={12} lg="auto">
                <NavbarButton
                  color1="white"
                  color2={Const.TITLE_COLOR}
                  text="SPP"
                  itemVisible
                  large
                  active={this.state.activePage === "spp"}
                  onClick={() => {
                    this.setPage("spp");
                    this.setSubMenu("spp");
                  }}
                />
              </Grid>
            </Grid>
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.nav.page,
  subMenu: state.nav.subMenu
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
