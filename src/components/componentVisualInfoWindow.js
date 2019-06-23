/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class ComponentVisualInfoWindow extends Component {
  constructor(props) {
    super(props);
    this.getMarkerData = this.getMarkerData.bind(this);
  }

  getMarkerData(marker) {
    return this.props.storeDirectory.filter(store =>
      Math.round(store.Coordinates.lat * 10000000) === Math.round(marker.latLng.lat() * 10000000)
      && Math.round(store.Coordinates.lng * 10000000) === Math.round(marker.latLng.lng() * 10000000))[0];
  }

  render() {
    const markerData = this.getMarkerData(this.props.marker);
    return (
      <div id="insideinfowindow">
        información:
        Nombre:
        {' '}
        {markerData.Name}
        Dirección:
        {' '}
        {markerData.Address}
        Coordenadas:
        {' '}
        {markerData.Coordinates.lat}
,
        {' '}
        {markerData.Coordinates.lng}
      </div>
    );
  }
}

export default ComponentVisualInfoWindow;
