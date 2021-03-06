import { combineReducers } from 'redux';

import COMMON from './common/commonReducer';
import PROTO from '$APPS/proto/protoReducer';

const reducers = combineReducers({
  common: combineReducers(COMMON),
  protoStore: PROTO,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
