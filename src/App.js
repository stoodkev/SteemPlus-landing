import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Site under construction.
          </p>
          <a
            className="App-link"
            href="https://steemit.com/@steem-plus"
            target="_blank"
            rel="noopener noreferrer"
          >
            SteemPlus Blog
          </a>
        </header>
      </div>
    );
  }
}

export default App;
