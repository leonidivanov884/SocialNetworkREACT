import React from "react";
import s from "./photos.module.css";

function PhotosItem (props){
  return <div className={s.boximg}><img src="http://lorempixel.com/250/200" alt="" /></div>
}


function Photos(){
  return ( 
    
    <div className={s.photos}>
      <div className={s.head}>
        <h3>My photo</h3>
        <div className={s.btns}>
          <a href="#" className={s.btn_save}>Saved photos</a>
          <a href="#" className={s.btn_add}>Add photo</a>
        </div>
      </div>
      <div className={s.wrapper}>
        <PhotosItem />
        <PhotosItem />
        <PhotosItem />
        <PhotosItem />
        <PhotosItem />
        <PhotosItem />
        <PhotosItem />
        <PhotosItem />
        <PhotosItem />
      </div>
    
    </div>
 
  )
}

export default Photos;