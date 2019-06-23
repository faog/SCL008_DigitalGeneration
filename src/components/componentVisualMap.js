/* eslint-disable react/sort-comp */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { render } from 'react-dom';
import apiKeyGoogle from '../apiKeyGoogle';
import ComponentVisualInfoWindow from './componentVisualInfoWindow';

const storeDirectory = require('../store_directory.json');

class ComponentVisualMap extends Component {
  constructor(props) {
    super(props);
    this.infoWindow = {};
    this.onGoogleApiLoad = this.onGoogleApiLoad.bind(this);
  }

  onGoogleApiLoad() {
    this.infoWindow = new window.google.maps.InfoWindow({ content: '<div id="infowindow" />' });
    const map = new window.google.maps.Map(
      document.getElementById('map'),
      {
        center: { lat: 19.30518, lng: -99.0615 },
        zoom: 14,
      },
    );
    storeDirectory.map((store) => {
      const marker = new window.google.maps.Marker({
        position: { lat: store.Coordinates.lat, lng: store.Coordinates.lng },
        name: store.Name,
        title: store.Address,
        map,
      });

      marker.addListener('click', (clickedMarker) => {
        this.createInfoWindow(clickedMarker, map);
      });
    });
  }

  createInfoWindow(marker, map) {
    this.infoWindow.setPosition({ lat: marker.latLng.lat(), lng: marker.latLng.lng() });
    this.infoWindow.addListener('domready', (evt) => {
      render(<ComponentVisualInfoWindow marker={marker} storeDirectory={storeDirectory} />, document.getElementById('infowindow'));
    });
    this.infoWindow.open(map);
  }

  componentDidMount() {
    if (!window.google) {
      const scriptApi = document.createElement('script');
      scriptApi.type = 'text/javascript';
      scriptApi.src = `https://maps.google.com/maps/api/js?key=${apiKeyGoogle}`;
      const positionScript = document.getElementsByTagName('script')[0];
      if (positionScript) {
        positionScript.parentNode.insertBefore(scriptApi, positionScript);
      }
      // google.maps no se puede usar hasta que termine de ser cargado
      scriptApi.addEventListener('load', (script) => {
        this.onGoogleApiLoad();
      });
    } else {
      this.onGoogleApiLoad();
    }
  }

  render() {
    return (
      <section style={{ width: '100%', height: '90vh' }} id="map" />
    );
  }
}

export default ComponentVisualMap;
