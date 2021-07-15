import React from "react";
import s from "./groups.module.css";


function GroupsItem(){
  return ( 
    <li>
      <Link>
        <div className={s.preview}><img src="" alt="" /></div>
        <div className={s.box}>
          <h4>name</h4>
          <p>text groups </p>
        </div>       
      </Link>
    </li>
   
 
  )
}

export default Groups;