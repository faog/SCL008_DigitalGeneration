import React, { Component } from 'react';
import ComponentVisualMap from './components/componentVisualMap';
import ComponentVisualSideBar from './components/componentVisualSideBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <ComponentVisualSideBar />
        </header>
        <section>
          <ComponentVisualMap />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
