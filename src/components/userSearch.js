import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers} from '../store/actions/userActions';
import {saveInput} from '../store/actions/inputActions';
import './userSearch.css';

const UserSearch = () => {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList.data);
  const users = useSelector((state) => state.users.data);
  const input = useSelector((state) => state.input.data);
  const error = useSelector((state) => state.users.error)


  useEffect(() => {

    dispatch(getUsers(input, userList)) 
  },[input])

  console.log(input)
  console.log(users)

  return (
    <div className="search">
        <input
          onChange={(event) =>  {
            
            dispatch(saveInput(event.target.value))
          }
          }
           autoComplete="off"
          name="user"
          type="text"
          value={input}
        />

          {users && users[0].username !== input
            ? users.map((item, index) => {
                return (
                  //<option
                  //  key={index}
                  //>  {item.username}</option>
                  <div key={item.id} className='option' onClick={() => dispatch(saveInput(item.username))}><strong>{item.username.substring(0,input.length)}</strong>{item.username.substring(input.length, item.username.length)}</div>
                );
              })
            : null}
        <div>{error}</div>
      </div>
  );
};

export default UserSearch;
