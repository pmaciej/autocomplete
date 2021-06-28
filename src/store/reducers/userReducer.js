import {
  GET_USERS,
  SET_ERROR,
} from '../types';

const initialState = {
  data: null,
  error: 'Please enter username',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
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