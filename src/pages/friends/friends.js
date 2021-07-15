import React from "react";
import s from "./friends.module.css";
import { Link } from 'react-router-dom';
import MyFriendsContainer from "./myfriends/myfriendsContainer";

function Friends(){
  return ( 
    
    <div className={s.friends}>
      <div className={s.header}>
        <h2 className={s.title}>My friends</h2>
        <Link className={s.btn_add} to="users">Add Friends</Link> 
      </div>
      <MyFriendsContainer />

    </div>
 
  )
}

export default Friends;