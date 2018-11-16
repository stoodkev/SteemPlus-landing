import React from "react";
import { Toolbar, Avatar, Grid } from "@material-ui/core/";
import NavbarButton from "../components/buttons/navbarButton";
import TitleApp from "../components/labels/titleApp";
import "../css/containers/header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as Data from "../jsons/data.json";
import * as SPPData from "../jsons/spp.json";
import * as RankingsData from "../jsons/rankings.json";
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
  padding: "0.25rem",
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

const closeMenu = () => {
  const closeMenuButton = document.getElementById("close-menu-button");
  if (closeMenuButton !== null) closeMenuButton.click();
};

const getHomeSubMenu = (navItems, activePage, setSubMenu, activeSubElement) => {
  if (activePage === "main") {
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
            itemVisible={activePage === "main"}
            active={
              Formatter.tagFromTitle(navItems[section].sectionTitle) ===
              activeSubElement
            }
            onClick={() => {
              setSubMenu(
                `${Formatter.tagFromTitle(navItems[section].sectionTitle)}`
              );
              closeMenu();
            }}
          />
        </AnchorLink>
      </Grid>
    ));
  }
};

const getSppSubMenu = (navItems, activePage, setSubMenu, activeSubElement) => {
  if (activePage === "spp") {
    return Object.keys(navItems)
      .filter(k => navItems[k].sectionTitle !== undefined)
      .map((section, i) => (
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
              itemVisible={activePage === "spp"}
              active={
                Formatter.tagFromTitle(navItems[section].sectionTitle) ===
                activeSubElement
              }
              onClick={() => {
                setSubMenu(
                  `${Formatter.tagFromTitle(navItems[section].sectionTitle)}`
                );
                closeMenu();
              }}
            />
          </AnchorLink>
        </Grid>
      ));
  }
};
const getRankingsSubMenu = (
  navItems,
  activePage,
  setSubMenu,
  activeSubElement
) => {
  if (activePage === "rankings") {
    return Object.keys(navItems)
      .filter(k => navItems[k].sectionTitle !== undefined)
      .map((section, i) => (
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
              itemVisible={activePage === "rankings"}
              active={
                Formatter.tagFromTitle(navItems[section].sectionTitle) ===
                activeSubElement
              }
              onClick={() => {
                setSubMenu(
                  `${Formatter.tagFromTitle(navItems[section].sectionTitle)}`
                );
                closeMenu();
              }}
            />
          </AnchorLink>
        </Grid>
      ));
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.page = props.page;
    this.setPage = props.setPage;
    this.setSubMenu = props.setSubMenu;
    this.subMenu = props.subMenu;

    this.isMainPage = this.page === "main";
    this.navItems = Data.default;
    this.sppNavItems = SPPData.default;
    this.rankingsNavItems = RankingsData.default;

    this.state = {
      activePage: this.page,
      activeSubElement: this.subMenu,
      sticky: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    let currentItems;
    if (this.state.activePage === "main") currentItems = this.navItems;
    else if (this.state.activePage === "spp") currentItems = this.sppNavItems;
    else if (this.state.activePage === "rankings")
      currentItems = this.rankingsNavItems;

    const banner = document.getElementById("banner");
    const sticky = banner.height;

    if (window.pageYOffset >= sticky) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }

    let keys = Object.keys(currentItems).filter(
      k => currentItems[k].sectionTitle !== undefined
    );
    let minDiff = window.pageYOffset;
    let currentSection = "";
    for (let i = keys.length - 1; i >= 0; i--) {
      const htmlItem = document.getElementById(
        `${Formatter.tagFromTitle(currentItems[keys[i]].sectionTitle)}`
      );
      const offset = htmlItem.offsetTop;
      const diff = Math.abs(window.pageYOffset - offset);
      if (minDiff > diff) {
        minDiff = diff;
        currentSection = Formatter.tagFromTitle(
          currentItems[keys[i]].sectionTitle
        );
      }
    }
    this.setState({
      activeSubElement: currentSection
    });
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
            <NavbarButton
              id="close-menu-button"
              color1={Const.TITLE_COLOR}
              color2="white"
              itemVisible
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
                    closeMenu();
                  }}
                />
              </Grid>
              {getHomeSubMenu(
                this.navItems,
                this.state.activePage,
                this.setSubMenu,
                this.state.activeSubElement,
                this.closeMenuButton
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
                    this.setSubMenu("what-are-steemplus-points");
                    closeMenu();
                  }}
                />
              </Grid>
              {getSppSubMenu(
                this.sppNavItems,
                this.state.activePage,
                this.setSubMenu,
                this.state.activeSubElement,
                this.closeMenuButton
              )}
              <Grid item xs={12} sm={12} md={12} lg="auto">
                <NavbarButton
                  color1="white"
                  color2={Const.TITLE_COLOR}
                  text="Rankings"
                  itemVisible
                  large
                  active={this.state.activePage === "rankings"}
                  onClick={() => {
                    this.setPage("rankings");
                    this.setSubMenu("weekly");
                    closeMenu();
                  }}
                />
              </Grid>
              {getRankingsSubMenu(
                this.rankingsNavItems,
                this.state.activePage,
                this.setSubMenu,
                this.state.activeSubElement,
                this.closeMenuButton
              )}
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
