import React from "react";
import s from './home.module.css'
import UserPostsContainer from './posts/userpostsContainer';
import UserBanerContainer from './baner/userBanerContainer';
import UserInfoContainer from './info/userinfoContainer';
import UserContactsContainer from './contacts/usercontactsContainer';
import UserDescContainer from './desc/userdescContainer';
import UserTagsContainer from './tags/usertagsContainer';
import UserPanelContainer from './panel/userpanelContainer';

import * as axios from 'axios';


function UserPage(){
  
  // axios.get("https://leonidivanov884.github.io/SocialNetworkREACT/src/api/users.json").then(response => {
  //   debugger
  // })



  return (
   <div className={s.home}>
      <UserBanerContainer />      
      <UserInfoContainer />
      <UserTagsContainer />  
      <UserDescContainer />
     
      <UserContactsContainer />
      <UserPanelContainer />
      <UserPostsContainer  />    
    </div>
  )
}


export default UserPage;