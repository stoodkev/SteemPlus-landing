import React from "react";
import * as Data from "../jsons/data.json";
import { connect } from "react-redux";

const style = { height: "36rem", width: "36rem" };

const onClick = setActiveFeature => {
  setTimeout(() => {
    let selectedFeature = window.location.href.replace(
      `${window.location.origin}/#`,
      ""
    );
    selectedFeature = selectedFeature.replace("%20", " ");
    selectedFeature = selectedFeature.replace("%2B", "+");
    window.history.pushState("SteemPlus", "SteemPlus", "/");
    selectedFeature = Data.features.data.findIndex(
      f => f.title === selectedFeature
    );
    if (selectedFeature !== -1) setActiveFeature(selectedFeature);
  }, 50);
};

const WordArt = ({ url, setActiveFeature }) => (
  <div
    style={style}
    data-wordart-src={url}
    data-wordart-show-attribution
    onClick={() => onClick(setActiveFeature)}
  />
);
const mapStateToProps = state => {
  return {
    activeFeature: state.nav.activeFeature
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setActiveFeature: feature => {
      dispatch({
        type: "SET_ACTIVE_FEATURE",
        payload: feature
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordArt);
