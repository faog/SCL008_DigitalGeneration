/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ComponentVisualSideBar } from '../componentVisualSideBar';

configure({ adapter: new Adapter() });

const marker = {
  Name: 'Red Barn Stores 3877-TORRES  LINDAVISTA',
  Address: 'MIGUEL OTHON DE MENDIZABAL OTE. 343, COL. NUEVA INDUSTRIAL VALLEJO,  C.P. 07700 MÉXICO, D.F',
  Coordinates: {
    lat: 19.50548,
    lng: -99.15066,
  },
};

describe('ComponentVisualSideBar', () => {
  it('Debería existir el componente <ComponentVisualSideBar />', () => {
    const component = mount(<ComponentVisualSideBar markersFromStore={{ markers: [marker] }} />);
    expect(component.exists()).toBe(true);
  });

  it('Debería abrir el sideBar al presionar el boton favoritos', () => {
    const component = mount(<ComponentVisualSideBar markersFromStore={{ markers: [marker] }} />);
    component.find({ className: 'openbtn', name: 'FAVORITOS' }).simulate('click');
    expect(component.state().sidebarWidth).toBe('300px');
    expect(component.state().navMargin).toBe('300px');
  });

  it('Debería cerrar el sideBar al presionar el boton "x"', () => {
    const component = mount(<ComponentVisualSideBar markersFromStore={{ markers: [marker] }} />);
    component.find('.closebtn').simulate('click');
    expect(component.state().sidebarWidth).toBe('0px');
    expect(component.state().navMargin).toBe('0px');
  });
});
