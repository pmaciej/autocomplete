import {
  FETCH_DATA,
  SET_ERROR,
} from '../types';

const initialState = {
  data: null,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        data: action.payload,
        error: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state

  }
};
