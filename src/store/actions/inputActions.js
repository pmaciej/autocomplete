import {SAVE_INPUT, SET_ERROR, SET_LOADING} from '../types';

export const saveInput = (input) => {
  return (dispatch) => {
    if (input) {
      dispatch({
        type: SAVE_INPUT,
        payload: input,
      });
    } else {
      dispatch({
        type: SAVE_INPUT,
        payload: '',
      });
    }
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setError = () => {
  return {
    type: SET_ERROR,
    payload: '',
  };
};
