import React, { Component } from "react";
import Header from "../containers/header";
import Footer from "../containers/footer";
import "../css/containers/App.css";
import Content from "./content";
import Banner from "../components/banner";
import Spp from "./spp";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Header />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/spp" component={Spp} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
