import React, { Component } from 'react';
import apiKeyGoogle from '../apiKeyGoogle';

class ComponentVisualMap extends Component {
  constructor(props) {
    super(props);
    this.onGoogleApiLoad = this.onGoogleApiLoad.bind(this)
  }

  onGoogleApiLoad() {
    const map = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: 19.30518, lng: -99.0615 },
        zoom: 14
      }); 
  }

  componentDidMount() {
    if (!window.google) {
      let scriptApi = document.createElement('script');
      scriptApi.type = 'text/javascript';
      scriptApi.src = `https://maps.google.com/maps/api/js?key=${apiKeyGoogle}`;
      let positionScript = document.getElementsByTagName('script')[0];
      positionScript.parentNode.insertBefore(scriptApi, positionScript);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      scriptApi.addEventListener('load', script => {
        this.onGoogleApiLoad()
      })
    } else {
      this.onGoogleApiLoad()
    }
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }} id="map" />
    );
  }
}

export default ComponentVisualMap;