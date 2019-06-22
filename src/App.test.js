/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createGoogleMapsMock from 'jest-google-maps-mock';
import App from './App';

configure({ adapter: new Adapter() });
window.google = jest.fn();
window.google.maps = createGoogleMapsMock();

describe('App', () => {
  it('Debería existir el componente <App />', () => {
    const component = mount(<App />);
    expect(component.exists()).toBe(true);
  });
});
