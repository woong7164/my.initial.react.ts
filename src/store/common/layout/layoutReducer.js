import * as types from './layoutTypes';

const initState = {
  isLoading: false,
  isLayer: false,
  headerTitle: '헤더 타이틀',
};

const layoutReducer = (state = initState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case types.SET_HEADER_TITLE: {
      return { ...state, headerTitle: action.payload };
    }
    case types.TOGGLE_LAYER: {
      return { ...state, isLayer: action.payload };
    }
    default:
      return { ...state };
  }
};

export default layoutReducer;
