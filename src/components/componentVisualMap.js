/* eslint-disable no-tabs */
/* eslint-disable array-callback-return */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import apiKeyGoogle from '../apiKeyGoogle';

const storeDirectory = require('../store_directory.json');

class ComponentVisualMap extends Component {
  constructor(props) {
    super(props);
    this.onGoogleApiLoad = this.onGoogleApiLoad.bind(this);
  }

  onGoogleApiLoad() {
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
      /*
        marker.addListener('click',(clickedMarker)=>{
          alert(JSON.stringify(clickedMarker));
				})
				*/
    });
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
