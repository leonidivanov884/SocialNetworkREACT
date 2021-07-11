import React from "react";
import s from "./asidenews.module.css";


function AsideNews() {
  return (
    <div className={s.news}>
       <h3>News</h3>
       <div className={s.items}>
         <div className={s.item}>
           <img src='http://lorempixel.com/250/200' alt="" />
         </div>
         <div className={s.item}>
           <img src='http://lorempixel.com/250/200' alt="" />
         </div>
         <div className={s.item}>
           <img src='http://lorempixel.com/250/200' alt="" />
         </div>
         <div className={s.item}>
           <img src='http://lorempixel.com/250/200' alt="" />
         </div>
         <div className={s.item}>
           <img src='http://lorempixel.com/250/200' alt="" />
         </div>
         <div className={s.item}>
           <img src='http://lorempixel.com/250/200' alt="" />
         </div>
       </div>
    </div>
  )
}


export default AsideNews;