import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import { loadState, saveState } from './initialState';

const initialData = loadState();
const store = createStore(
  reducer,
  initialData,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ),
);
/*
  subscribe(): es una función del store de redus, que permite ejecutar la función
que recibe como parámetro cada vez que ocurre un cambio de estado
*/
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
