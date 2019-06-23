/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualSideBar.css';
import logo from '../img/logo-digital-generation.png';

// export, permite probar el componente sin redux
export class ComponentVisualSideBar extends Component {
  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    // Inicializar para cuando sidebar está cerrado
    this.state = {
      sidebarWidth: '0',
      navMargin: '0',
    };
  }

  /* Se fija el ancho del panel lateral a 300px y el margen del contenido de la página a 300px */
  openNav() {
    this.setState({
      sidebarWidth: '300px',
      navMargin: '300px',
    });
  }

  /* Se fija el ancho del panel lateral a 0 y el margen del contenido de la página a 0 */
  closeNav() {
    this.setState({
      sidebarWidth: '0px',
      navMargin: '0px',
    });
  }

  // Se debe conectar los estilos al estado, para poder ser cambiados por una acción de react
  render() {
    return (
      <React.Fragment>
        <section id="mySidebar" className="sidebar" style={{ width: this.state.sidebarWidth }}>
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <h5>FAVORITOS</h5>
          {this.props.markersFromStore.markers.map((marker, index) => (
            <div className="favoritedata" key={index}>
              <h5>
                <strong>Nombre:</strong>
                {' '}
                {marker.Name}
              </h5>
              <h5>
                <strong>Dirección:</strong>
                {' '}
                {marker.Address}
              </h5>
            </div>
          ))}
        </section>
        <nav id="nav" style={{ marginLeft: this.state.navMargin }}>
          <img src={logo} alt="Logo" />
          <ComponentVisualButton className="openbtn" buttonOnClick={this.openNav} name="FAVORITOS" />
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  markersFromStore: state.markers,
});

export default connect(
  mapStateToProps,
)(ComponentVisualSideBar);
