import React from "react";

import { connect } from 'react-redux';
import HomeInfo from './homeinfo'

let mapStateToProps = (state) => {  
      
  return {
    homeInfo: state.homePage.info,
   
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const HomeInfoContainer = connect(mapStateToProps , mapDispatchToProps)(HomeInfo)

export default HomeInfoContainer;



 
