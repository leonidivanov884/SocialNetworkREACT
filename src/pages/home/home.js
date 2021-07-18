import React from "react";
import s from './home.module.css'
import HomePostsContainer from './posts/homepostsContainer';
import HomeBanerContainer from './baner/homeBanerContainer';
import HomeInfoContainer from './info/homeinfoContainer';
import HomeContactsContainer from './contacts/homecontactsContainer';
import HomeDescContainer from './desc/homedescContainer';
import HomePanelContainer from './panel/homepanelContainer';
import HomeTagsContainer from './tags/hometagsContainer';




function Home(props){
  
  return (
   <div className={s.home}>
      <HomeBanerContainer />      
      <HomeInfoContainer />
      <HomeTagsContainer />  
      <HomeDescContainer />
     

      <HomeContactsContainer />
      <HomePanelContainer />
      <HomePostsContainer  />    
    </div>
  )
}

export default Home;