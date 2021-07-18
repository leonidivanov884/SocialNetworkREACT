import React from "react";

import { connect } from 'react-redux';
import HomeInfo from './homeinfo'
import { togglefollow } from '../../../redux/users-reducer';

let mapStateToProps = (state) => {        
  return {
    homeInfo: state.users.oneuser.info,   
  }  
}

const UserInfoContainer = connect(mapStateToProps , {togglefollow })(HomeInfo)

export default UserInfoContainer;



 
