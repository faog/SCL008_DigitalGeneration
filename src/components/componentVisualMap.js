import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import apiKeyGoogle from '../apiKeyGoogle';

/*
* Use this component as a launching-pad to build your functionality.
*
*/
class ComponentVisualMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

      <InfoWindow onClose={this.onInfoWindowClose}>

      </InfoWindow>
    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (apiKeyGoogle)
})(ComponentVisualMap)