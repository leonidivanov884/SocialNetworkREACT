export const FOLLOW = 'FOLLOW';
export const SETUSERS = 'SET_USERS';

let initialState = {  
  oneuser: {
    info: {
        id: 10 ,
        friends: false,
        valfriends: 13,
        valphotos: 190,
        valmusic: 1005,
        valvideo: 8,
        baner: 'https://i.pinimg.com/736x/fa/2e/a5/fa2ea5504a93dc854e2d22b578f752cb.jpg',
        login: '@oneuserw',
        avatar: 'https://i.redd.it/wjdxpc437t431.jpg' , 
        name: 'This is one user',          
        date: '22.01.2200',  
        socials: {
            github: 'githublink',
            linkedin: 'linkinvk',
            vk: 'linkinvk',
            telegram: 'linkinvk',
            instagram: 'linkininstagram',
            facebook: 'linkinfacebook',
        },
        contacts: {
            phone: '7999999999',
            birthday: '12.01.1975',
            geo: 'Russia: Kamensk',    
        },
        tags: [ '#ONEUSER','#ONEUSER', '#ONEUSER' ],
        desc: 'Hello my name is oneuser',          
    },    
    messageForYou: [
        'Hello',
        'How are you',
        'Cool :3',
        'Yes, i`m so happy',
    ],    
    posts:  [  
        {
          id: 1,
          date: '14 May 2021',
          text: 'Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow',
        },
        {
          id: 2,
          date: '11 May 2021',
          text: 'Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав ',
        }   
        ,
        {
          id: 3,
          date: '11 May 2021',
          text: 'Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав ',
        }  
        ,
        {
          id: 4,
          date: '11 May 2021',
          text: 'Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав ',
        }          
    ],
    newPostText: '',  
  },
  users: []
}



const userReducer = (state = initialState, action) => {    
  switch(action.type){    
    case FOLLOW:       
      let stateCopy = {...state}
      stateCopy.oneuser.info = {...state.oneuser.info}     
      stateCopy.oneuser.info.friends = stateCopy.oneuser.info.friends == false ? true : false
      return stateCopy

    case SETUSERS:    
      return {...state, users: action.users}  

    default: 
      return state
  }  
}



export const togglefollow = () => {
  return {
    type: FOLLOW
  }
}
export const onSetUsers = (users) => {
  return {
    type: SETUSERS,
    users: users
  }
}
export default userReducer;