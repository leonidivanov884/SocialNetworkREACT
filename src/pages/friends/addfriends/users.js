import React from "react";
import s from "./users.module.css";
import UsersItem from './usersItem';
import Loader from '../../../commonents/loader';

function Users (props) {
  if (props.users) {
    return (
      <div className={s.users}>        
        <div className={s.header}>
          <h2 className={s.title}>All users</h2>        
        </div>
        <ul className={s.users_list}>
          <Loader isLoading={props.isLoading}/>          
          {props.users.map( fr => (
              <UsersItem key={fr.info.id} friend={fr.info.friends} id={fr.info.id} img={fr.info.avatar} name={fr.info.name} desc={fr.info.desc}/>   
          ))}          
        </ul> 
      </div> 
    )
  }
  return null;
}



export default Users;