import React from 'react';
import s from './homepanel.module.css'

function HomePanel () {
  return (
    <ul className={s.panel}>
      <li><a href="#">160 FOLOWERS</a></li>
      <li><a href="#">15 POSTS</a></li>
      <li><a href="#">5 PHOTOS</a></li>
      <li><a href="#">2 VIDEOS</a></li>
      <li><a href="#">9 MUSIC</a></li>
    </ul>
  )
}


export default HomePanel;