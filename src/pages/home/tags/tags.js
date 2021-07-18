import React from 'react';
import s from './tags.module.css'

function Tags (props) {
  
  return (
    <ul className={s.tags}>
      {props.tags.map( tag => (
        <li><a href="#">{tag}</a></li>
      ))}
    </ul>
  )
}


export default Tags;