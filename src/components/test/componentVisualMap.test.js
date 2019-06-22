/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualMap from '../componentVisualMap';

configure({ adapter: new Adapter() });

window.google = jest.fn();

describe('ComponentVisualMap', () => {
  it('Debería existir el componente <ComponentVisualMap />', () => {
    const component = mount(<ComponentVisualMap />);
    expect(component.exists()).toBe(true);
  });
});
