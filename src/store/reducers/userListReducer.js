import {
  FETCH_DATA,
  SET_LOADING,
  SET_ERROR,
} from '../types';

const initialState = {
  data: null,
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state

  }
};
