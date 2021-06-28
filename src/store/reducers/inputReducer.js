import {
  SAVE_INPUT,
  SET_ERROR,
} from '../types';

const initialState = {
  data: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INPUT:
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