import React from "react";
import s from "./myfriends.module.css";
import Friend from './friend';


function MyFriends(props){
    
  return ( 
    <ul className={s.my_friends}>
      {props.users.map ( fr => (        
        <Friend key={fr.info.id} friend={fr.info.friends} id={fr.info.id} img={fr.info.avatar} name={fr.info.name} desc={fr.info.desc}/>         
      ))}      
    </ul> 
  )
}



export default MyFriends;