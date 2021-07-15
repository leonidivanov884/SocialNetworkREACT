import React from 'react';
import { Link } from 'react-router-dom';
import s from './homepanel.module.css'

function HomePanel (props) {
  
  return (
    <ul className={s.panel}>
      <li><Link to="/friends">{props.valFriends} FRIENDS</Link></li>
      <li>{props.valPosts} POSTS</li>
      <li><Link to="/photos">{props.valPhotos} PHOTOS</Link></li>
      <li><Link to="">{props.valVideo} VIDEOS</Link></li>
      <li><Link to="">{props.valMusic} MUSIC</Link></li>
    </ul>
  )
}


export default HomePanel;