/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createGoogleMapsMock from 'jest-google-maps-mock';
import { ComponentVisualInfoWindow } from '../componentVisualInfoWindow';

const storeDirectory = require('../../store_directory');

const marker = {
  latLng: {
    lat: () => (19.50548),
    lng: () => (-99.15066),
  },
};

configure({ adapter: new Adapter() });
window.google = jest.fn();
window.google.maps = createGoogleMapsMock();

describe('ComponentVisualInfoWindow', () => {
  it('Debería existir el componente <ComponentVisualInfoWindow />', () => {
    const component = mount(<ComponentVisualInfoWindow
      storeDirectory={storeDirectory}
      marker={marker}
    />);
    expect(component.exists()).toBe(true);
  });

  it('Deberia agregar un marcador a favoritos', () => {
    const addMarkerToStore = jest.fn(_marker => (true));
    const component = mount(<ComponentVisualInfoWindow
      marker={marker}
      storeDirectory={storeDirectory}
      addMarkerToStore={addMarkerToStore}
    />);
    component.find({ className: 'btnadd', name: 'Agregar a favoritos' }).simulate('click');
    expect(addMarkerToStore).toHaveBeenCalled();
  });
});
