import React from "react";
import { connect } from 'react-redux';
import Tags from './tags';


let mapStateToProps = (state) => {
  return {
    tags: state.homePage.info.tags
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
   
  }
}
const HomeTagsContainer = connect(mapStateToProps , mapDispatchToProps)(Tags)

export default HomeTagsContainer;
