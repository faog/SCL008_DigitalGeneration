import React, { Component } from 'react';
import ComponentVisualMap from './components/componentVisualMap';
import logo from './img/logo-digital-generation.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
            <img src={logo} alt="Logo" />
          </nav>
        </header>
        <ComponentVisualMap />
      </React.Fragment>
    );
  }
}

export default App;
