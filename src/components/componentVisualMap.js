/* eslint-disable import/no-named-as-default */
/* eslint-disable react/sort-comp */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import ComponentVisualInfoWindow from './componentVisualInfoWindow';
import store from '../redux/store';
import apiKeyGoogle from '../apiKeyGoogle';

const storeDirectory = require('../store_directory.json');

class ComponentVisualMap extends Component {
  constructor(props) {
    super(props);
    this.infoWindow = {};
    this.onGoogleApiLoad = this.onGoogleApiLoad.bind(this);
  }

  /* Se ejecuta luego que se termina de cargar la libreria de google, creando el elemento mapa (Map)
  Crea el elemento InfoWindow vacío
  Recorre el archivo Json y carga los marcadores (marker) */
  onGoogleApiLoad() {
    this.infoWindow = new window.google.maps.InfoWindow({ content: '<div id="infowindow" />' });
    const map = new window.google.maps.Map(
      document.getElementById('map'),
      {
        center: { lat: 19.30518, lng: -99.0615 },
        zoom: 14,
      },
    );
    storeDirectory.map((storeMarker) => {
      const marker = new window.google.maps.Marker({
        position: { lat: storeMarker.Coordinates.lat, lng: storeMarker.Coordinates.lng },
        name: storeMarker.Name,
        title: storeMarker.Address,
        map,
      });

      marker.addListener('click', (clickedMarker) => {
        this.createInfoWindow(clickedMarker, map);
      });
    });
  }

  /* Crea el elemento InfoWindow de googleMaps y le adjunta el
  componentVisualInfoWindow y store de redux
  - setPosition() mueve el infoWindow vacío a la posición del marcador seleccionado
  - domready se ejecuta luego que el infowindow se mueve la posicion del marcador seleccionado,
  - dando la acción de imprimir la información del marcador en el infowindow */
  createInfoWindow(marker, map) {
    this.infoWindow.setPosition({ lat: marker.latLng.lat(), lng: marker.latLng.lng() });
    this.infoWindow.addListener('domready', (evt) => {
      render(
        <Provider store={store}>
          <ComponentVisualInfoWindow
            marker={marker}
            storeDirectory={storeDirectory}
            infoWindow={this.infoWindow}
          />
        </Provider>,
        document.getElementById('infowindow'),
      );
    });
    this.infoWindow.open(map);
  }

  /* Proceso asincrono, que se ejecuta cuando el componente está listo, permitiendo
  iniciar la carga del script de google maps
  crea un elemento script en el html, asociando el tipo y ruta
  posteriormente, inserta el elemento en el tag creado */
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
