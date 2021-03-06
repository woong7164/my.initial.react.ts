import { call, put, takeEvery, all } from 'redux-saga/effects';

import { getProto } from './protoAction';

import { toggleLoading } from '$STORE/common/layout/layoutAction';
import * as types from './protoTypes';
import http from '$SRC/api/http';
import URL from '$URL/url';
import { ResponseVo, ResponseDataVo, ResponseAnyVo } from '$API/ResponseVo';
import dataJson from '$SRC/views/apps/proto/json/response';

function* getProtoCall(action) {
  try {
    yield put(toggleLoading(true));

    //API 호출시 데이터가 없어서 임시로 response json 파일 호출
    if (dataJson.code === 200) {
      console.log('dataJson-------', dataJson);
      yield put(getProto.success(dataJson.data));
      return;
    }
    yield put(getProto.failure(dataJson.data.returnMessage));

    //------------------------------------------------------

    // const response: ResponseAnyVo = yield call(http.get, {
    //   url: URL.PROTO.GET_PROTO(action.payload),
    // });

    // if (response.data.code === 200) {
    //   console.log('NEW_GET_PROTO', response.data.data);
    //   yield put(getProto.success(response.data.data));
    //   return;
    // }
    //yield put(getProto.failure(response.data.returnMessage));
    // -----------------------------------------------------------------------------------------
  } catch {
    yield put(getProto.failure('API error'));
  } finally {
    yield put(toggleLoading(false));
  }
}

export default function* protoSaga() {
  yield all([takeEvery(types.GET_PROTO, getProtoCall)]);
}
