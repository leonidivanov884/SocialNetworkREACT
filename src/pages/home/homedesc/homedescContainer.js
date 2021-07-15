import React from "react";

import { connect } from 'react-redux';
import HomeDesc from './homedesc'

let mapStateToProps = (state) => { 
  
  return {
    desc: state.homePage.info.desc
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const HomeDescContainer = connect(mapStateToProps , mapDispatchToProps)(HomeDesc)

export default HomeDescContainer;



 
