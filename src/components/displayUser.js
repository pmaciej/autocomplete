import React from 'react';
import {useSelector} from 'react-redux';
import './displayUser.css';

const DisplayUser = () => {
  const users = useSelector((state) => state.users.data);
  const input = useSelector((state) => state.input.data);

  console.log(input);


  return (
    <div className="users">
      
      {users && users[0].username === input ? (
        <div className="users-data">
        <div className="users-title">
        <h2>{users[0].name}</h2>
        </div>
          <div className="single-user">
            <p>
              <b>ID: </b>
            </p>
            <p> {users[0].id}</p>
          </div>
          <div className="single-user">
            <p>
              <b>Username: </b>
            </p>
            <p>{users[0].username}</p>
          </div>
          <div className="single-user">
            <p>
              <b>Email: </b>
            </p>
            <p> {users[0].email}</p>
          </div>
          <div className="single-user">
            <p>
              <b>Phone Number: </b>
            </p>
            <p> {users[0].phone}</p>{' '}
          </div>
          <div className="single-user">
            <p>
              <b>Website Address: </b>
            </p>
            <p> {users[0].website}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DisplayUser;
