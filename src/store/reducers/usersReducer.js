import {
  GET_USERS,
  SET_ERROR,
} from '../types';

const initialState = {
  data: null,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        data: action.payload,
        loading: false,
        error: '',
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