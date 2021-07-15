import React from "react";
import { Link } from "react-router-dom";
import s from "./groupstabs.module.css";




function GroupsTabs(){
  return (    
    <ul className={s.tabs}>
      <li className={s.active}><Link to="" >All groups</Link></li>
      <li><Link to="" >Subscriptions</Link></li>
      <li><Link to="" >My groups</Link></li>
    </ul>  
  )
}

export default GroupsTabs;