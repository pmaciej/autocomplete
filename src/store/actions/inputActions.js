import {SAVE_INPUT} from '../types';

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

