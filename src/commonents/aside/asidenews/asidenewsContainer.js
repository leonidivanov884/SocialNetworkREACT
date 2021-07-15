import React from "react";
import { connect } from 'react-redux';
import AsideNews from './asidenews';



let mapStateToProps = (state) => {
  
  return {
    news: state.newsPage.news
  }
}
let mapDispatchToProps = (dispatch) => {
  return { 
    
  }
}


const AsideNewsContainer = connect(mapStateToProps , mapDispatchToProps)(AsideNews)

export default AsideNewsContainer;

 
