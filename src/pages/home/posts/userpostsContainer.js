import React from "react";
import { connect } from 'react-redux';
import HomePosts from './homeposts';
import { onNewText, onAddPost } from '../../../redux/home-reducer';


let mapStateToProps = (state) => {
  
  return {
    homePage: state.users.oneuser
  }
}

const UserPostsContainer = connect(mapStateToProps , {onNewText, onAddPost})(HomePosts)

export default UserPostsContainer;

 
