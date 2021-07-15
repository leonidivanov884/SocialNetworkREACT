import React from "react";
import HomeTags from "./hometags/hometags";
import HomePanel from "./homepanel/homepanel";
import s from './home.module.css'
import HomePostsContainer from './homeposts/homepostsContainer';
import HomeBanerContainer from './homebaner/homeBanerContainer';
import HomeInfoContainer from './homeinfo/homeinfoContainer';
import HomeContactsContainer from './homecontacts/homecontactsContainer';
import HomeDescContainer from './homedesc/homedescContainer';




function UserPage(){
  
  return (
   <div className={s.home}>
      <HomeBanerContainer />      
      <HomeInfoContainer />
      <HomeTags />  
      <HomeDescContainer />
     

      <HomeContactsContainer />
      <HomePanel />
      <HomePostsContainer  />    
    </div>
  )
}

export default UserPage;