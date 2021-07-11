export const ADD_POST = 'ADD-POST';
export const CHANGE_AREA = 'CHANGE-AREA';

let initialState = {  
  posts:  [  
    {
      id: 1,
      date: '14 May 2021',
      text: 'Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow',
      tags: 'Front end , ASDads' 
    },
    {
      id: 2,
      date: '12 May 2021',
      text: 'The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow',
      tags: 'Web Design'  
    },
    {
      id: 3,
      date: '12 May 2021',
      text: 'The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow',
      tags: 'Web Design'  
    }
  ],
  newPostText: ''  
}


const homeReducer = (state = initialState , action) => { 
  switch(action.type){
    case ADD_POST: 
      let newPost = {
        id: 4,
        date: '12 May 2021',
        text: state.newPostText,
        tags: 'Web Design'
      }      
      state.posts.push(newPost)    
      state.newPostText = ''
      return state
    case CHANGE_AREA:
      state.newPostText = action.text
      return state
    default: 
      return state
  }   
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const newTextActionCreator = (text) => {
  return {
    type: CHANGE_AREA,
    text: text 
  }
}

export default homeReducer;