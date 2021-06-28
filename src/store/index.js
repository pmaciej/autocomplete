import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userListReducer from './reducers/userListReducer';
import usersReducer from './reducers/userReducer';
import inputReducer from './reducers/inputReducer';


const rootReducer = combineReducers({
  userList: userListReducer,
  users: usersReducer,
  input: inputReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


export default store;