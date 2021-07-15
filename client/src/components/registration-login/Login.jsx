import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import AppContext from './../AppContext.js';
import axios from 'axios';

const Login = (props) => {
  const {username, website, bio, setUsername, setBio, setWebsite, serverUrl, isArtist, setIsArtist} = useContext(AppContext)

  const handleAccountNameChange = (e) => {
    setUsername(e.target.value);
  }

  const loginHandler = ()=> {
    axios.get(`${serverUrl}/username?${username}`)
    .then(()=>{props.history.push('/TestHome')})
    .catch(()=>{alert('invalid username')})
  }

  return (
    <div className="rl">
      <Link to="/">Back</Link>
      <img src='/images/coversplash.jpeg'/>
      <input type="text" value={username} onChange={handleAccountNameChange}></input>
      <button onClick={()=>{loginHandler()}}>Login</button>
    </div>
  )

};

export default Login;