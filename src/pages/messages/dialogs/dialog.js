import { func } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './dialog.module.css'
import {
    changeMessageActionCreator,
    addMessageActionCreator
} from '../../../redux/messages-reducer';




function Message (props){  
  return (
    <li className={s.message}><p>{props.messageText}</p></li>    
  )
}

function Dialog (props) {
    
  let newMessageElement = React.createRef();

 
  let newMessageText = () => {    
    let text = newMessageElement.current.value;
    props.onNewMessageText(text); 
  }
 
  let addMessage = () => { 
    let nomber = props.messages.id - 1; // Убавляем на 1 из-за 0 в масиве
    props.onAddMessage(nomber);  
    
  }
  
  return (
      
    <div className={s.alldialog}>

      <div className={s.header}>
        <Link to="/messages/"  className={s.back}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.214 23.933C5.77364 23.9259 0.554436 18.7067 0.547363 12.2663V12.033C0.675617 5.62158 5.95438 0.515579 12.3665 0.600657C18.7786 0.685735 23.92 5.93 23.8781 12.3425C23.8362 18.755 18.6267 23.9317 12.214 23.933ZM12.214 2.93296C7.05937 2.93296 2.8807 7.11164 2.8807 12.2663C2.8807 17.421 7.05937 21.5996 12.214 21.5996C17.3687 21.5996 21.5474 17.421 21.5474 12.2663C21.5416 7.11404 17.3663 2.93875 12.214 2.93296ZM10.5224 18.0996L8.8727 16.4488L12.9969 12.3246L8.8727 8.20046L10.5224 6.54963L16.2974 12.3246L10.5235 18.0996H10.5224Z" fill="#2E3A59"/>
          </svg>
        </Link>
        <Link to="" className={s.person}>
          <div className={s.ava}><img src={props.ava} alt="" /></div>
          <div className={s.box}>
            <p className={s.name}>{props.messages.name}</p>
            <p className={s.status}>last seen 4 hour ago</p>
          </div>
        </Link>
        <a className={s.phone}>         
          <svg width='18' height='18'  x="0px" y="0px" viewBox="0 0 513.64 513.64"  ><path fill="#Fff" d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"/></svg>
        </a>
      </div>
      <ul className={s.dialog}>
        {props.messages.text.map( messageText => (
          <Message messageText={messageText}/>
        ))}
      </ul> 
      <div className={s.panel}>
        <textarea ref={newMessageElement} value={props.newMessageText} onChange={newMessageText} className={s.textarea} placeholder="Message..."></textarea>
        <button onClick={addMessage}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.214 23.933C5.77364 23.9259 0.554436 18.7067 0.547363 12.2663V12.033C0.675617 5.62158 5.95438 0.515579 12.3665 0.600657C18.7786 0.685735 23.92 5.93 23.8781 12.3425C23.8362 18.755 18.6267 23.9317 12.214 23.933ZM12.214 2.93296C7.05937 2.93296 2.8807 7.11164 2.8807 12.2663C2.8807 17.421 7.05937 21.5996 12.214 21.5996C17.3687 21.5996 21.5474 17.421 21.5474 12.2663C21.5416 7.11404 17.3663 2.93875 12.214 2.93296ZM10.5224 18.0996L8.8727 16.4488L12.9969 12.3246L8.8727 8.20046L10.5224 6.54963L16.2974 12.3246L10.5235 18.0996H10.5224Z" fill="#2E3A59"/>
          </svg>
        </button>
      </div>
    
    </div>

  )
}

export default Dialog;