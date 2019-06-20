/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('Debería existir el componente <App />', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});
