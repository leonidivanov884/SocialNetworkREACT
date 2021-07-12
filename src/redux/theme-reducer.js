export const CHANGE_THEME = 'CHANGE-THEME';

let initialState = {
  bodyTheme: 'dark', 
}


const themeReducer = (state = initialState, action) => { 
  
  switch(action.type){    
    case CHANGE_THEME:       
      let copyState = {...state}
      copyState = copyState.bodyTheme == 'dark' ? 'light' : 'dark'
      console.log(copyState);
      return copyState    
    default: 
      return state
  }      
}

export const changeThemeActionCreator = () => {
  
  return {
    type: CHANGE_THEME,
  }
}
export default themeReducer;