import React from "react";

import { connect } from 'react-redux';
import HomeDesc from './homedesc'

let mapStateToProps = (state) => { 
  
  return {
    desc: state.users.oneuser.info.desc
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const UserDescContainer = connect(mapStateToProps , mapDispatchToProps)(HomeDesc)

export default UserDescContainer;



 
