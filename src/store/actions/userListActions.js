
import axios from 'axios';
import {
  FETCH_DATA,
  SET_ERROR,
} from '../types';



export const getData = () => {
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
        payload: 'Connection error',
      });
    }
  };
};

