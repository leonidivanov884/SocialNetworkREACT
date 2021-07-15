import React from "react";
import s from "./photos.module.css";

function PhotosItem (props){  

  let del = React.createRef();

  function deletePhoto () {
    let id = del.current.getAttribute('data-id');
    props.onDeletePhoto(id);
  }

  return (
    <div className={s.boximg}>
      {/* <div onClick={deletePhoto} ref={del} data-id={props.id} className={s.delete}><svg width="18" height="20" viewBox="0 0 18 20" ><path d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6ZM12 16H10V7H12V16ZM8 16H6V7H8V16Z" fill="#2E3A59"/></svg></div> */}
      <img src={props.imgsrc} alt="" />
    </div>
  )
  
}


function Photos(props){  
  let newFile = React.createRef();
  
  let addPhoto = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file)

    reader.onload = function (e) {     
       props.onAddPhoto(e.target.result)
    }  
  }
  
 
  return ( 
    
    <div className={s.photos}>
      <div className={s.head}>
        <h3>My photo</h3>
        <div className={s.btns}>
          <a href="#" className={s.btn_save}>Saved photos</a>
          <input type="file" ref={newFile} id="add_photo" onChange={addPhoto}  className={s.add_photo} />
          <label for="add_photo"  className={s.btn_add}>Add photo</label>
        </div>
      </div>
      <div className={s.wrapper}>
        {props.photosPage.photos.map( (it, index) => (
          <PhotosItem key={index} imgsrc={it.src} id={it.id} onDeletePhoto={props.onDeletePhoto}/>
        ))}       
      </div>    
    </div>
 
  )
}

export default Photos;