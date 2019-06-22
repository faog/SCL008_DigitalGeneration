/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualSideBar from '../componentVisualSideBar';
import ComponentVisualButton from '../componentVisualButton';

configure({ adapter: new Adapter() });

describe('ComponentVisualSideBar', () => {
  it('Debería existir el componente <ComponentVisualSideBar />', () => {
    const component = shallow(<ComponentVisualSideBar />);
    expect(component.exists()).toBe(true);
  });

  it('Debería abrir el sideBar al presionar el boton favoritos', () => {
    const component = mount(<ComponentVisualSideBar />);
    component.find(ComponentVisualButton).simulate('click');
    expect(component.state().sidebarWidth).toBe('300px');
    expect(component.state().navMargin).toBe('300px');
  });

  it('Debería cerrar el sideBar al presionar el boton "x"', () => {
    const component = mount(<ComponentVisualSideBar />);
    component.find('.closebtn').simulate('click');
    expect(component.state().sidebarWidth).toBe('0px');
    expect(component.state().navMargin).toBe('0px');
  });
});
