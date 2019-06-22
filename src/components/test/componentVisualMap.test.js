/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createGoogleMapsMock from 'jest-google-maps-mock';
import ComponentVisualMap from '../componentVisualMap';

configure({ adapter: new Adapter() });

window.google = jest.fn();
window.google.maps = createGoogleMapsMock();

describe('ComponentVisualMap', () => {
  it('Debería existir el componente <ComponentVisualMap />', () => {
    const component = mount(<ComponentVisualMap />);
    expect(component.exists()).toBe(true);
  });
  it('Debería intentar cargar en caso de no existir window.google', () => {
    window.google = false;
    const component = mount(<ComponentVisualMap />);
    expect(component.exists()).toBe(true);
  });
});
