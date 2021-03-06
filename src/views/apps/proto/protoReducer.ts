import * as types from './protoTypes';
import { protoAction } from './protoAction';
import { createReducer } from 'typesafe-actions';

export interface MapState {
  proto: any;
  getProtoError: string;
}

const initState: MapState = {
  proto: null,
  getProtoError: null,
};

const protoReducer = createReducer<MapState, protoAction>(initState, {
  [types.GET_PROTO_SUCCESS]: (state, action) => {
    console.log('GET_PROTO_SUCCESS', action.payload);
    return {
      ...state,
      proto: action.payload,
    };
  },
  [types.GET_PROTO_FAIL]: (state, action) => ({
    ...state,
    proto: action.payload,
  }),
});

export default protoReducer;
