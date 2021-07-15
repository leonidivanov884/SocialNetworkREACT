import React from "react";
import st from "./profile.module.css";



function Profile(props){
  
  return (  
    <div className={st.profile}>
      <p>{props.info.name}</p>
      <div className={st.ava}>
        <img src={props.info.avatar} alt="avatar" />
      </div>      
    </div>     
        
  )
}

export default Profile;