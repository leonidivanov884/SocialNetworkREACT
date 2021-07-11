export const CHANGE_THEME = 'CHANGE-THEME';

let initialState = {
  bodyTheme: 'dark', 
}


const themeReducer = (state = initialState, action) => { 
  
  switch(action.type){
    case CHANGE_THEME: 
      state = state == 'dark' ? 'light' : 'dark'
      return state    
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