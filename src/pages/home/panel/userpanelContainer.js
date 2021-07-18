import React from "react";

import { connect } from 'react-redux';
import HomePanel from './homepanel';


let mapStateToProps = (state) => {  
    
  let valFriends = state.users.oneuser.info.valfriends;
  let valPhotos =  state.users.oneuser.info.valphotos
  let valPosts = state.users.oneuser.posts.length
  let valVideo = state.users.oneuser.info.valvideo
  let valMusic = state.users.oneuser.info.valmusic
  
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
const UserPanelContainer = connect(mapStateToProps , mapDispatchToProps)(HomePanel)

export default UserPanelContainer;



 
