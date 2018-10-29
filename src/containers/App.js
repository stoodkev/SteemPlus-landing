import React, { Component } from "react";
import Header from "../containers/header";
import Footer from "../containers/footer";
import "../css/containers/App.css";
import Content from "./content";
import Banner from "../components/banner";
import Spp from "./spp";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Header />
        {this.props.page === "main" ? <Content /> : <Spp />}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.nav.page
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
