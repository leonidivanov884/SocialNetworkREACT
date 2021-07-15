import React from "react";

import { connect } from 'react-redux';
import Users from "./users";



let mapStateToProps = (state) => {    
  return {
    users: state.usersPage
  }  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const UsersContainer = connect(mapStateToProps , mapDispatchToProps)(Users)

export default UsersContainer;



 
