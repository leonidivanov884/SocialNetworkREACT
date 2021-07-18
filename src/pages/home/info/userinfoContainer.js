import React from "react";

import { connect } from 'react-redux';
import HomeInfo from './homeinfo'
import { togglefollow } from '../../../redux/users-reducer';

let mapStateToProps = (state) => {        
  return {
    homeInfo: state.users.oneuser.info,   
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {  
    togglefollow: () => {      
      dispatch(togglefollow())
    }  
  }
}
const UserInfoContainer = connect(mapStateToProps , mapDispatchToProps)(HomeInfo)

export default UserInfoContainer;



 
