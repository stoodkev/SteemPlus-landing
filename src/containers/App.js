import React, { Component } from "react";
import Header from "../containers/header";
import Footer from "../containers/footer";
import "../css/containers/App.css";
import Content from "./content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
