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
  let postsItems = props.posts.map( (p) =>  <Post date={p.date} text={p.text} tags={p.tags} />  )

  return (
    <div className={s.posts}>     
    
      <Area  
        newPostText={props.newPostText} 
        dispatch={props.dispatch}/>
       {postsItems}
    </div>
  )
}


export default HomePosts;