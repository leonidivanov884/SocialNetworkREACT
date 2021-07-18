import React from "react";
import s from "./homeBaner.module.css";




function HomeBaner(props){  
  
  return ( 
    <div className={s.baner}><img src={props.homebaner} alt="" /></div>
  )
}

export default HomeBaner;