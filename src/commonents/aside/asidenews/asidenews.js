import React from "react";
import s from "./asidenews.module.css";
import { Link } from 'react-router-dom';


function AsideNewsItem(props) {
  return (
    <Link to="" className={s.item}>
      <h4 className={s.title}>{props.title}</h4>
      <img src={props.img} alt="" />
    </Link>
  )
}

function AsideNews(props) {
  
  return (
    <div className={s.news}>
       <h3>News</h3>
       <div className={s.items}>
         {props.news.map( item => (
           <AsideNewsItem title={item.title} img={item.img} />
         ))}
       </div>
    </div>
  )
}


export default AsideNews;