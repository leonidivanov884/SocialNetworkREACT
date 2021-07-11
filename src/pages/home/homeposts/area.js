import React from 'react';
import s from './area.module.css'
import { newTextActionCreator, addPostActionCreator } from '../../../redux/home-reducer';


function Area (props) {

  let newPostElement = React.createRef();

 
  let newText = () => {
    let text = newPostElement.current.value;
    props.dispatch( newTextActionCreator(text) ); 
  }
 
 let addPost = () => { 
    props.dispatch( addPostActionCreator() );  
  }

  return (
    <div className={s.area}>
      <textarea onChange={newText}  value={props.newPostText} ref={newPostElement} className={s.textarea}></textarea>
      <button onClick={addPost} className={s.button}>
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12.214 23.933C5.77364 23.9259 0.554436 18.7067 0.547363 12.2663V12.033C0.675617 5.62158 5.95438 0.515579 12.3665 0.600657C18.7786 0.685735 23.92 5.93 23.8781 12.3425C23.8362 18.755 18.6267 23.9317 12.214 23.933ZM12.214 2.93296C7.05937 2.93296 2.8807 7.11164 2.8807 12.2663C2.8807 17.421 7.05937 21.5996 12.214 21.5996C17.3687 21.5996 21.5474 17.421 21.5474 12.2663C21.5416 7.11404 17.3663 2.93875 12.214 2.93296ZM10.5224 18.0996L8.8727 16.4488L12.9969 12.3246L8.8727 8.20046L10.5224 6.54963L16.2974 12.3246L10.5235 18.0996H10.5224Z" fill="#2E3A59"/></svg>
      </button>
    </div>    
  )
}


export default Area;