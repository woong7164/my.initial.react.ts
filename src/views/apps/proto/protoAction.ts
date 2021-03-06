import { ActionType, createAsyncAction } from 'typesafe-actions';
import * as types from './protoTypes';

export const getProto = createAsyncAction(
  types.GET_PROTO,
  types.GET_PROTO_SUCCESS,
  types.GET_PROTO_FAIL,
)<any, any, any>();

const actions = {
  getProto,
};

export type protoAction = ActionType<typeof actions>;
