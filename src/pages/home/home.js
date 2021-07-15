import React from "react";
import HomeTags from "./hometags/hometags";
import s from './home.module.css'
import HomePostsContainer from './homeposts/homepostsContainer';
import HomeBanerContainer from './homebaner/homeBanerContainer';
import HomeInfoContainer from './homeinfo/homeinfoContainer';
import HomeContactsContainer from './homecontacts/homecontactsContainer';
import HomeDescContainer from './homedesc/homedescContainer';
import HomePanelContainer from './homepanel/homepanelContainer';




function Home(props){
  
  return (
   <div className={s.home}>
      <HomeBanerContainer />      
      <HomeInfoContainer />
      <HomeTags />  
      <HomeDescContainer />
     

      <HomeContactsContainer />
      <HomePanelContainer />
      <HomePostsContainer  />    
    </div>
  )
}

export default Home;