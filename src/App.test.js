/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createGoogleMapsMock from 'jest-google-maps-mock';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

configure({ adapter: new Adapter() });
window.google = jest.fn();
window.google.maps = createGoogleMapsMock();

describe('App', () => {
  it('Debería existir el componente <App />', () => {
    const component = mount(<Provider store={store}><App /></Provider>);
    expect(component.exists()).toBe(true);
  });
});
