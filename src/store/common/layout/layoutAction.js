import { createAction } from 'redux-actions';
import * as types from './layoutTypes';

export const toggleLoading = createAction(types.TOGGLE_LOADING);
export const setHeaderTitle = createAction(types.SET_HEADER_TITLE);
export const toggleLayer = createAction(types.TOGGLE_LAYER);
