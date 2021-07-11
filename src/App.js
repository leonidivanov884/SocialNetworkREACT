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
import Messages from './pages/messages/messages';
import Photos from './pages/photos/photos';
import Groups from './commonents/groups/groups';
import Music from './pages/music/music';


 
function App(props) {
  
  return (  
    <Router>
      <div className="app" id={props.state.bodyTheme}>
        <Header dispatch={props.dispatch} bodyTheme={props.state.bodyTheme}/>
 
        <div className="wrapper">
          
          <Nav />

          <div className="content">
              
              <Route exact path="/" >
                <Home homePage={props.state.homePage} dispatch={props.dispatch}/>
              </Route>
              <Route  path="/tabs">
                <Tabs />
              </Route>
              <Route  path="/messages">
                <Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>
              </Route>
              <Route  path="/music">
                <Music />
              </Route>
              <Route  path="/groups">
                <Groups />
              </Route>
              <Route  path="/photos">
                <Photos />
              </Route>
            
          </div> 
          
          <Aside />
        </div>      
      </div>
    </Router>
    

  );
}



export default App;
