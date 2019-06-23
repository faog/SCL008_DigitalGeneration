import { ADD_TO_FAVORITES, DELETE_TO_FAVORITES } from '../actions/actionTypes';

export default (
  state = {
    markers: [],
  },
  action,
) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
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