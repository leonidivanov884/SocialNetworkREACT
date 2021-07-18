import React from "react";
import s from "./homeBaner.module.css";




function UserBaner(props){  
  
  return ( 
    <div className={s.baner}><img src={props.oneuser.info.baner} alt="" /></div>
  )
}

export default UserBaner;