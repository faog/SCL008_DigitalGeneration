/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualFavorite.css';
import logo from '../img/logo-digital-generation.png';

class ComponentVisualFavorite extends Component {
  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('nav').style.marginLeft = '250px';
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('nav').style.marginLeft = '0';
  }

  render() {
    return (
      <React.Fragment>
        <section id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <h5>Favoritos</h5>
        </section>
        <nav id="nav">
          <img src={logo} alt="Logo" />
          <ComponentVisualButton className="openbtn" buttonOnClick={this.openNav} name="FAVORITOS" />
        </nav>

      </React.Fragment>
    );
  }
}

export default ComponentVisualFavorite;
