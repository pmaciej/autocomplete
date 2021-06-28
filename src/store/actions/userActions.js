import {GET_USERS, SET_ERROR, SET_LOADING} from '../types';

export const getUsers = (input, userList) => {
  return (dispatch) => {
    if (input) {
      const filteredUserList = userList.filter((user) =>
        user.username !== input
          ? user.username.toUpperCase().startsWith(input.toUpperCase())
          : user.username
      );

      if (
        input &&
        filteredUserList.length &&
        filteredUserList[0].username !== input
      ) {
        dispatch({
          type: GET_USERS,
          payload: filteredUserList,
        });
      }
      if (
        input &&
        filteredUserList.length &&
        filteredUserList[0].username === input
      ) {
        dispatch({
          type: GET_USERS,
          payload: [filteredUserList[0]],
        });
      }

      if (!filteredUserList.length) {
        dispatch({
          type: GET_USERS,
          payload: ''
        });
        dispatch({
          type: SET_ERROR,
          payload: 'Nie ma takiego usera',
        });
      }

      

      }
      else {
        dispatch({
          type: GET_USERS,
          payload: ''
        });
        dispatch({
          type: SET_ERROR,
          payload: 'Wpisz nazwe usera',
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
