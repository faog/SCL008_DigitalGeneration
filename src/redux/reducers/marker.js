import { ADD_TO_FAVORITES, DELETE_TO_FAVORITES } from '../actions/actionTypes';

export default (
  state = {
    markers: [],
  },
  action,
) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      // Evitar que se añada una tienda repetida en los favoritos
      if (state.markers.find(marker => marker.Coordinates.lat === action.marker.Coordinates.lat
        && marker.Coordinates.lng === action.marker.Coordinates.lng)) {
        return state;
      }
      return {
        ...state,
        markers: state.markers.concat(action.marker),
      };
    case DELETE_TO_FAVORITES:
      return {
        ...state,
        markers: state.markers.filter((marker, index) => {
          if (action.index !== index) {
            return true;
          }
          return false;
        }),
      };
    default: return state;
  }
};
