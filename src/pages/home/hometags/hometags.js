import React from 'react';
import s from './hometags.module.css'

function HomeTags () {
  return (
    <ul className={s.tags}>
      <li><a href="#">#Front-end</a></li>
      <li><a href="#">#HTML</a></li>
      <li><a href="#">#CSS</a></li>
      <li><a href="#">#JS</a></li>
      <li><a href="#">#React</a></li>
      <li><a href="#">#Web-design</a></li>
    </ul>
  )
}


export default HomeTags;