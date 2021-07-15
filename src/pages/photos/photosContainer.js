import React from "react";
import { connect } from 'react-redux';
import { addPhoto, deletePhoto } from '../../redux/photo-reducer';
import Photos from './photos';


let mapStateToProps = (state) => {

  return {
    photosPage: state.photosPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onAddPhoto: (imgsrc) => {
      dispatch(addPhoto(imgsrc))
    },
    onDeletePhoto: (id) => {    
      dispatch(deletePhoto(id))
    }
  }
}
const PhotosContainer = connect(mapStateToProps , mapDispatchToProps)(Photos)

export default PhotosContainer;



 
