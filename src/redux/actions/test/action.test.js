/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import * as actions from '../marker';
import * as types from '../actionTypes';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('Crear la acción de agregar un favorito ', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const marker = {
      Name: 'Red Barn Stores 3877-TORRES  LINDAVISTA',
      Address: 'MIGUEL OTHON DE MENDIZABAL OTE. 343, COL. NUEVA INDUSTRIAL VALLEJO,  C.P. 07700 MÉXICO, D.F',
      Coordinates: {
        lat: 19.50548,
        lng: -99.15066,
      },
    };
    const expectedAction = {
      type: types.ADD_TO_FAVORITES,
      marker,
    };
    store.dispatch(actions.addMarkerToFavorites(marker));
    const actionsFromStore = store.getActions();
    expect(actionsFromStore).toEqual([expectedAction]);
  });

  it('Crear la acción de eliminar un producto ', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const index = 1;
    const expectedAction = {
      type: types.DELETE_TO_FAVORITES,
      index,
    };
    store.dispatch(actions.deleteMarkerToFavorites(index));
    const actionsFromStore = store.getActions();
    expect(actionsFromStore).toEqual([expectedAction]);
  });
});
