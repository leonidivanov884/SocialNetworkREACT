import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './index.css';
import './App.css';
import Header from './commonents/header/header';
import Nav from './commonents/nav/nav';
import Aside from './commonents/aside/aside'
import Home from './pages/home/home';
import Tabs from './commonents/tabs/tabs';

import Music from './pages/music/music';
import Friends from './pages/friends/friends';
import MessagesContainer from './pages/messages/messagesContainer';
import UsersContainer from './pages/friends/addfriends/UsersContainer';
import PhotosContainer from './pages/photos/photosContainer';
import Groups from './pages/groups/groups';
import UserPage from './pages/home/userPage';




 
function App(props) {
  
  return (  
    <Router>
      <div className="app" id={props.state.bodyTheme}>
        <Header/> 
        <div className="wrapper">          
          <Nav />
          <div className="content">              
              <Route exact path="/" >
                <Home  />
              </Route>
              <Route  path="/tabs">
                <Tabs />
              </Route>
              <Route  path="/messages">
                <MessagesContainer />
              </Route>
              <Route  path="/music">
                <Music />
              </Route>
              <Route  path="/groups">
                <Groups />
              </Route>
              <Route  path="/photos">
                <PhotosContainer />
              </Route> 
              <Route  path="/friends">
                <Friends />
              </Route> 
              <Route  path="/users">
                <UsersContainer />
              </Route>  
              <Route  path="/userPage">
                <UserPage />
              </Route>  
                        
          </div>           
          <Aside />
        </div>      
      </div>
    </Router>
    

  );
}



export default App;
