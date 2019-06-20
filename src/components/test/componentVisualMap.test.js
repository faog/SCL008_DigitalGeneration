/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualMap from '../componentVisualMap';

configure({ adapter: new Adapter() });

describe('ComponentVisualMap', () => {
  /*  
  it('Debería existir el componente <ComponentVisualMap />', () => {
    const component = shallow(<ComponentVisualMap />);
    expect(component.exists()).toBe(true);
  });
  it('Debería ser un elemento con id="map"', () => {
    expect(shallow(<ComponentVisualMap id="map" />).is('#map')).toBe(true);
  });
  */
});
