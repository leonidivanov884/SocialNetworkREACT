import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dialog from "./dialogs/dialog";

import s from "./messages.module.css";
import './count.css'




function MessagesItem(props){

  // Если сообщение новое добавляем класс new
  const newMessage = props.count ? 'new' : '';
  const messagesItemClasses = `${s.message} ${newMessage}`;  

  return (
    <Link to={`/messages/${props.id}`}   className={messagesItemClasses} >
      <div className={s.ava}><img src={props.ava} alt="" /></div>
      <div className={s.box}>
        <p className={s.name}>{props.name}</p>
        <p className={s.text}>{props.text}</p>
        <p></p>
      </div>
      
      <div className={s.info}>
        <p className={s.date}>{props.date}</p>
        <p className="message__count">{props.count}</p>
      </div>
    </Link>
  )
}

function Messages(props){  
  
  return (     
    <Switch>    
      <Route exact path="/messages">
        { props.messagesPage.messages.map( (m) => <MessagesItem  id={m.id} ava={m.ava} name={m.name} text={m.text[0]} date={m.date} count={m.count}/>) }
      </Route>       
      {props.messagesPage.messages.map( (item, index) => (       
          <Route key={index}  path={`/messages/` + item.id }>     
             <Dialog  
              ava={item.ava}
              messages={props.messagesPage.messages[item.id - 1]} 
              newMessageText={props.messagesPage.newMessageText} 
              onNewMessageText={props.onNewMessageText} 
              onAddMessage={props.onAddMessage}
            /> 
          </Route>            
      ))}
    </Switch>   
 
  )
}

export default Messages;