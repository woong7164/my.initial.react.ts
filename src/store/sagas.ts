import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import protoSaga from '$APPS/proto/protoSaga';

export default function* sagas() {
  yield all([protoSaga()]);
}
