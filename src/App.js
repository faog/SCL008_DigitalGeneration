import React, { Component } from 'react';
import ComponentVisualMap from './components/componentVisualMap';
import ComponentVisualFavorite from './components/componentVisualFavorite';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <ComponentVisualFavorite />
        </header>
        <section>
          <ComponentVisualMap />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
