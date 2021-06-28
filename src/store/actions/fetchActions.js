
import axios from 'axios';
import {
  FETCH_DATA,
  SET_ERROR,
  SET_LOADING,
} from '../types';



export const getData = (input) => {
  return async (dispatch) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const request = axios.get(url);
      const response = await request;

      if (!response) {
        const resData = await response;
        throw new Error(resData.data.error);
      }

      dispatch({
        type: FETCH_DATA,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: 'Could not find user',
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
