import React from "react";

import { connect } from 'react-redux';
import Profile from "./profile";



let mapStateToProps = (state) => {  
  return {
    info: state.homePage.info,
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const ProfileContainer = connect(mapStateToProps , mapDispatchToProps)(Profile)

export default ProfileContainer;



 
