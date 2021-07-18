import React from "react";

import { connect } from 'react-redux';
import HomeBaner from './homeBaner'

let mapStateToProps = (state) => { 
  
  return {
    homebaner: state.homePage.info.baner
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const HomeBanerContainer = connect(mapStateToProps , mapDispatchToProps)(HomeBaner)

export default HomeBanerContainer;



 
