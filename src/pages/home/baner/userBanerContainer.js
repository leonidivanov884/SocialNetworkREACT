import React from "react";

import { connect } from 'react-redux';
import UserBaner from './userBaner';


let mapStateToProps = (state) => { 
  return {
    oneuser: state.users.oneuser
  }  
}

let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const UserBanerContainer = connect(mapStateToProps , mapDispatchToProps)(UserBaner)

export default UserBanerContainer;



 
