import React from "react";
import { connect } from 'react-redux';
import Tags from './tags';


let mapStateToProps = (state) => {

  return {
    tags: state.users.oneuser.info.tags
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
   
  }
}
const UserTagsContainer = connect(mapStateToProps , mapDispatchToProps)(Tags)

export default UserTagsContainer;
