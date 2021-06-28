import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getData} from './store/actions/fetchActions.js'
import UserSearch from './components/userSearch';
import DisplayUser from './components/displayUser.js';
import './App.css'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [])
  
  
 



  return (
    <div className="App">
      <UserSearch />
      <DisplayUser />
    </div>
  );
}

export default App;
