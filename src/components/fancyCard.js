import React from "react";
import { Card, CardContent, Grid, CardActions } from "@material-ui/core/";
import TitleFancyCard from "../components/labels/titleFancyCard";
import "../css/components/fancyCard.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { connect } from "react-redux";

const linkStyle = {
  textDecoration: "none",
  color: "#3c4a97",
  cursor: "pointer",
  fontWeight: "500",
  "&:hover": {
    textDecoration: "underline !important"
  }
};

const styleCardAction = {
  textAlign: "right",
  display: "inline-block",
  marginBottom: "2rem",
  width: "100%"
};

const styleContent = {
  marginTop: "0.75rem",
  color: "darkgrey",
  fontSize: "1rem",
  textAlign: "left"
};

const createLink = (link, setPage) => {
  switch (link.type) {
    case "anchor":
      return (
        <AnchorLink style={linkStyle} href={`#${link.to}`}>
          {link.text}
        </AnchorLink>
      );
    case "internal":
      return (
        <span style={linkStyle} onClick={() => setPage(link.to)} href="">
          {link.text}
        </span>
      );
    case "external":
      return (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={link.to}
          style={linkStyle}
        >
          {link.text}
        </a>
      );
    default:
      break;
  }
};

const FancyCard = ({ title, content, children, link, setPage }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card
      classes={{
        root: `fancy-card card-${title}`
      }}
    >
      <CardContent className="fancy-card-content">
        {children}
        <TitleFancyCard>{title}</TitleFancyCard>
        <span style={styleContent}>{content}</span>
      </CardContent>
      <CardActions style={styleCardAction}>
        {createLink(link, setPage)}
      </CardActions>
    </Card>
  </Grid>
);

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
)(FancyCard);
