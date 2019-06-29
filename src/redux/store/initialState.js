/* eslint-disable no-console */
/**
  loadState: carga el estado desde localStorage (sólo permite string)
  saveState: guardo el estado inicial que esta en localStorage
  Si encuentra un state, este debe ser convertido de string a un objeto de estado redux,
  ya que localStorage solo almacena string; usando JSON.parse();
 */
export const loadState = () => {
  try {
    const savedState = localStorage.getItem('state');
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};
/**
  saveState: guarda el estado en localStorage
  stateToSave: almacena el state de redux como string JSON, indicando que
  será guardado en estas condiciones
  */
export const saveState = (state) => {
  try {
    const stateToSave = JSON.stringify(state);
    localStorage.setItem('state', stateToSave);
  } catch (error) {
    console.log(`Error para guardar el estado: ${error}`);
  }
};
