import React from "react";
import HomeInfo from "./homeinfo/homeinfo";
import HomeTags from "./hometags/hometags";
import HomeContacts from "./homecontacts/homecontacts";
import HomePanel from "./homepanel/homepanel";
import HomePosts from "./homeposts/homeposts";

import s from './home.module.css'
import HomePostsContainer from './homeposts/homepostsContainer';




function Home(props){
  
  return (
   <div className={s.home}>
      <div className={s.baner}><img src="http://lorempixel.com/250/200" alt="" /></div>
      <HomeInfo />
      <HomeTags />  
       
      <p className={s.desc}>Front end developer.  Specializing in react. I love reading and active recreation</p>

      <HomeContacts />
      <HomePanel />
      <HomePostsContainer  />    
    </div>
  )
}

export default Home;