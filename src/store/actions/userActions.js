import {GET_USERS, SET_ERROR} from '../types';

export const getUsers = (input, userList) => {
  return (dispatch) => {

    if (input && userList) {
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
          payload: '',
        });
        dispatch({
          type: SET_ERROR,
          payload: 'Could not find user',
        });
      }
      if (!userList && !input) {
        dispatch({
          type: GET_USERS,
          payload: '',
        });
        dispatch({
          type: SET_ERROR,
          payload: 'Please enter username',
        });
      }

    }
  };
};
