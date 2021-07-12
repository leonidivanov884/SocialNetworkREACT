import React from "react";
import Messages from './messages';
import { connect } from 'react-redux';
import { changeMessageActionCreator, addMessageActionCreator } from '../../redux/messages-reducer';


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onNewMessageText: (text) => {  
      dispatch( changeMessageActionCreator(text)); 
    },
    onAddMessage: (nomber) => { 
      dispatch( addMessageActionCreator(nomber) );  
    }
  }
}
const MessagesContainer = connect(mapStateToProps , mapDispatchToProps)(Messages)

export default MessagesContainer;



 
