/* eslint-disable import/prefer-default-export */
import { ADD_TO_FAVORITES, DELETE_TO_FAVORITES } from './actionTypes';

export const addMarkerToFavorites = marker => ({
  type: ADD_TO_FAVORITES,
  marker,
});

export const deleteMarkerToFavorites = index => ({
  type: DELETE_TO_FAVORITES,
  index,
});
