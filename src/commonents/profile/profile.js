import React from "react";
import st from "./profile.module.css";



function Profile(){
  return (  
    <div className={st.profile}>
      <p>Leonid</p>
      <div className={st.ava}>
        <img src="./ava.png" alt="avatar" />
      </div>      
    </div>     
        
  )
}

export default Profile;