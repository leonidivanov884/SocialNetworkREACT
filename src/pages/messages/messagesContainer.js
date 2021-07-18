import React from "react";
import Messages from './messages';
import { connect } from 'react-redux';
import { onNewMessageText, onAddMessage } from '../../redux/messages-reducer';


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

const MessagesContainer = connect(mapStateToProps , {onNewMessageText, onAddMessage})(Messages)

export default MessagesContainer;



 
