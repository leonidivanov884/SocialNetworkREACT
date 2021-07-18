import React from "react";
import { connect } from 'react-redux';
import { onAddPhoto, onDeletePhoto } from '../../redux/photo-reducer';
import Photos from './photos';


let mapStateToProps = (state) => {
  return {
    photosPage: state.photosPage
  }
}

const PhotosContainer = connect(mapStateToProps , {onAddPhoto, onDeletePhoto})(Photos)

export default PhotosContainer;



 
