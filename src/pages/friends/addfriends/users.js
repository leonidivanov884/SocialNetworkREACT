import React from "react";
import s from "./users.module.css";
import { Link } from 'react-router-dom';


function UsersItem (props) {    
  if (props.friend === false) {
    return (
      <li>
        <div className={s.ava}><img src={props.img}/></div>
        <p className={s.name}>{props.name}</p>
        <p className={s.status}>{props.desc}</p>        
        <Link to="" className={s.add_in_friends}>Profile</Link>
      </li>
    )
  }
  return null; 
}

function Users(props){    
  return ( 
    <div className={s.users}>
      <div className={s.header}>
        <h2 className={s.title}>All users</h2>        
      </div>
      <ul className={s.users_list}>
        {props.users.users.map( fr => (
            <UsersItem key={fr.info.id} friend={fr.info.friends} id={fr.info.id} img={fr.info.avatar} name={fr.info.name} desc={fr.info.desc}/>   
        ))}          
      </ul> 
    </div>    
  )
}

export default Users;