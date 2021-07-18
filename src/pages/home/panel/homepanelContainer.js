import React from "react";

import { connect } from 'react-redux';
import HomePanel from './homepanel';


let mapStateToProps = (state) => {  
  
  let valFriends = 0;
  for (let i = 0; i <state.users.users.length ; i++) {
    if ( state.users.users[i].info.friends ){
      valFriends++
    }    
  }  

  let valPhotos =  state.photosPage.photos.length
  let valPosts = state.homePage.posts.length
  let valVideo = 0
  let valMusic = 0
  
  return {
    valFriends: valFriends,
    valPhotos: valPhotos,
    valPosts: valPosts,
    valVideo: valVideo,
    valMusic: valMusic,
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const HomePanelContainer = connect(mapStateToProps , mapDispatchToProps)(HomePanel)

export default HomePanelContainer;



 
