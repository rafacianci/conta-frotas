import {
  GET_VEHICLE,
  CLEAR_EDITION,
  SAVE_VEHICLE,
  SEARCH_VEHICLE,
} from './types';

export const getVehicle = (id) => ({
  type: GET_VEHICLE,
  payload: id,
});

export const clearEdition = () => ({
  type: CLEAR_EDITION,
});

export const save = (vehicle) => ({
  type: SAVE_VEHICLE,
  payload: vehicle,
});

export const search = (value) => ({
  type: SEARCH_VEHICLE,
  payload: value,
});
