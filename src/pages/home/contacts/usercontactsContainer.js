import React from "react";

import { connect } from 'react-redux';
import HomeContacts from './homecontacts'

let mapStateToProps = (state) => { 
  return {
    contacts: state.users.oneuser.info.contacts
  }
  
}
let mapDispatchToProps = (dispatch) => {
  return {    
  }
}
const UserContactsContainer = connect(mapStateToProps , mapDispatchToProps)(HomeContacts)

export default UserContactsContainer;



 
