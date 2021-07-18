import React from "react";
import { connect } from 'react-redux';
import HomePosts from './homeposts';
import { newTextActionCreator, addPostActionCreator } from '../../../redux/home-reducer';


let mapStateToProps = (state) => {
  
  return {
    homePage: state.homePage,
    home: state.homePage.home,   
  }
}
let mapDispatchToProps = (dispatch) => {
  return { 
    onNewText: (text) => {   
      dispatch(newTextActionCreator(text));
    },
    onAddPost: () => { 
      dispatch( addPostActionCreator() );  
    }
  }
}


const HomePostsContainer = connect(mapStateToProps , mapDispatchToProps)(HomePosts)

export default HomePostsContainer;

 
