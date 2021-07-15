import React from "react";
import s from "./groups.module.css";
import GroupsTabs from './groupsTabs.js/groupstabs';
import {
  BrowserRouter as Router,
  Route, 
} from "react-router-dom";
import AllGroupsContainer from './allGroups/allgroupsContainer';


function Groups(){
  return ( 
    
    <div className={s.groups}>
      <div className={s.header}>
        <GroupsTabs />
        <div className={s.createGroup}>Create</div>
      </div>
      <Router>
        <div className={s.wrapper}>          
          <Route exact path="/" >
            <AllGroupsContainer  />
          </Route>          
        </div>    
      </Router>
    </div>
 
  )
}

export default Groups;