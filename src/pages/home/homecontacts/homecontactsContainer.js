import React from "react";

import { connect } from 'react-redux';
import HomeContacts from './homecontacts'

let mapStateToProps = (state) => { 
  
  return {
    contacts: state.homePage.info.contacts
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const HomeContactsContainer = connect(mapStateToProps , mapDispatchToProps)(HomeContacts)

export default HomeContactsContainer;



 
