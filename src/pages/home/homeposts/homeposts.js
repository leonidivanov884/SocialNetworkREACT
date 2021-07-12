import React from 'react';
import s from './homeposts.module.css'
import Area from './area';


function Post (props) {
  return (
    <div className={s.post}>
      <p className={s.date}>{props.date}</p>
      <p className={s.text}>{props.text}</p>
      <ul className={s.tags}>
           <li><a href="#">#{props.tags}</a></li> 
      </ul>            
    </div>       
  )
}

function HomePosts (props) {
  
  return (
    <div className={s.posts}>     
      <Area newPostText={props.homePage.newPostText} onAddPost={props.onAddPost} onNewText={props.onNewText}  />
       {
        props.homePage.posts.map( (p) =>  <Post date={p.date} text={p.text} tags={p.tags} />  )
       }
    </div>
  )
}


export default HomePosts;