import React from "react";
import MyFriends from './myfriends';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  
  return {
    users: state.users.users
  }  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const MyFriendsContainer = connect(mapStateToProps , mapDispatchToProps)(MyFriends)

export default MyFriendsContainer;



 
