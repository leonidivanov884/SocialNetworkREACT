import React from 'react';
import loader from '../assets/loader.svg'

function Loader(props){
  return props.isLoading == true ? <img src={loader}/> : null
}


export default Loader;