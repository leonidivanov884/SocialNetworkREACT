import React from "react";
import { connect } from 'react-redux';
import AllGroups from './allgroups';


let mapStateToProps = (state) => {
  return {
    groupsPage: state.groupsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    // onAddPhoto: (imgsrc) => {
    //   dispatch(addPhoto(imgsrc))
    // }
  }
}
const AllGroupsContainer = connect(mapStateToProps , mapDispatchToProps)(AllGroups)

export default AllGroupsContainer;
