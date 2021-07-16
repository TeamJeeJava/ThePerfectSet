import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import SplashPage from './registration-login/SplashPage.jsx'
import Login from './registration-login/Login.jsx';
import Register from './registration-login/Register.jsx';
import RegistrationLogin from './registration-login/RegistrationLogin.jsx';
import ArtistRecommendations from './Artists/ArtistRecommendations.jsx'
import ArtistHome from './Artists/ArtistHome.jsx';
import AppContext from './AppContext.js'
import TestHome from './test/TestHome.jsx'
import themes from './themes.js';
import FavoriteArtists from './Fans/FavoriteArtists.jsx';
import FanHome from './Fans/FanHome.jsx';
import ArtistBookings from './Artists/ArtistBookings.jsx';
import ArtistSearch from './Fans/ArtistSearch.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState('Your Google Account');
  const [bio, setBio] = useState('Tell Us About Yourself');
  const [website, setWebsite] = useState('www.efgsdfg.com');
  const [isArtist, setIsArtist] = useState('false');
  const serverUrl = 'serverurl';
  const [bookings, setBookings] = useState();
  const [user_id, setUser_id] = useState(1);
  let theme = themes.neon;

  // useEffect(()=> {
  //   axios.get('/booking/view', {params:{user_id}})
  //   .then((bookingPromise)=> {setBookings(bookingPromise.data)})
  //   .catch((err) => console.log(err));

  // }, []);

  // if (!bookings) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      <AppContext.Provider value={{
        user_id,
        username,
        setUsername,
        bio,
        setBio,
        website,
        setWebsite,
        serverUrl,
        isArtist,
        setIsArtist,
        theme
        }} >
        <Router>
          <Switch>
            <Route path="/Artists/Home" exact component={ArtistHome} />
              <ArtistHome user_id={user_id} />
            <Route />
            <Route path="/Fans/Home" exact component={FanHome} />
            <Route path="/Fans/FavoriteArtists" exact component={FavoriteArtists} />
            <Route path="/Artists/Recommendations" exact>
              <ArtistRecommendations />
            </Route>
            <Route path="/Artists/Bookings" exact component={ArtistBookings} />
            <Route path="/Fans/ArtistSearch" exact componet={ArtistSearch} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </>
  )
};


export default App;