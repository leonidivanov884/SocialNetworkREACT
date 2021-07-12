import React from "react";
import { connect } from 'react-redux';
import Quickmenu from './quickmenu';
import { changeThemeActionCreator } from '../../redux/theme-reducer';



let mapStateToProps = (state) => {
  return {
    
  }
}
let mapDispatchToProps = (dispatch) => {
  return { 
    onChangeTheme: () => {  
      
      dispatch( changeThemeActionCreator()); 
    }
  }
}


const QuickMenuContainer = connect(mapStateToProps , mapDispatchToProps)(Quickmenu)

export default QuickMenuContainer;

 
