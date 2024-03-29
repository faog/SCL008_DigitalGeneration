/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMarkerToFavorites } from '../redux/actions/marker';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualInfoWindow.css';

export class ComponentVisualInfoWindow extends Component {
  constructor(props) {
    super(props);
    this.getMarkerData = this.getMarkerData.bind(this);
  }

  /* Método que permite buscar un marcador en especifico a partir de sus coordenadas (marker)
  Iguala el marcador impreso en la pantalla con el marcador que esta en el archivo Json, trayendo todos
  los datos del Json */
  getMarkerData(marker) {
    return this.props.storeDirectory.filter(store =>
      Math.round(store.Coordinates.lat * 10000000) === Math.round(marker.latLng.lat() * 10000000)
      && Math.round(store.Coordinates.lng * 10000000) === Math.round(marker.latLng.lng() * 10000000))[0];
  }

  // Añade el marcador a favoritos y cierra el infowindow
  // addMarkerToStore gatilla al reductor
  addMarker(marker) {
    this.props.addMarkerToStore(marker);
    this.props.infoWindow.close();
  }

  render() {
    const markerData = this.getMarkerData(this.props.marker);
    return (
      <div id="insideinfowindow">
        <h4>INFORMACIÓN TIENDA</h4>
        <h5>
          <strong>Nombre:</strong>
          {' '}
          {markerData.Name}
        </h5>
        <h5>
          <strong>Dirección:</strong>
          {' '}
          {markerData.Address}
        </h5>
        <h5>
          <strong>Coordenadas:</strong>
          {' '}
          {markerData.Coordinates.lat}
          ,
          {' '}
          {markerData.Coordinates.lng}
        </h5>
        <ComponentVisualButton className="btnadd" name="Agregar a favoritos" buttonOnClick={(evt) => { this.addMarker(markerData, evt); }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  addMarkerToStore: marker => dispatch(addMarkerToFavorites(marker)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentVisualInfoWindow);
