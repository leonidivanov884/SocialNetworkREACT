export const ADD_POST = 'ADD-POST';
export const CHANGE_AREA = 'CHANGE-AREA';

let initialState = {  
  posts:  [  
    {
      id: 1,
      date: '14 May 2021',
      text: 'Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow',
    },
    {
      id: 2,
      date: '12 May 2021',
      text: 'The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow',
    },
    {
      id: 3,
      date: '12 May 2021',
      text: 'The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow',
    }
  ],
  newPostText: '',

  info: {
    avatar: 'https://vraki.net/sites/default/files/inline/images/3_370.jpg',
    baner: 'https://miro.medium.com/max/876/1*9Is8boeyB3vkzNs4uwF95g.png',
    name: 'Leonid Ivanov',
    login: '@LeonidIvanovWeb',
    socials: {
      github: 'https://github.com/leonidivanov884',
      linkedin: 'linkinvk',
      vk: 'linkinvk',
      telegram: 'linkinvk',
      instagram: '',
      facebook: '',
    },
    contacts: {
      phone: '79120381324',
      birthday: '14 January 1999',
      geo: 'Russia: Ekaterinburg',    
    },
    tags: [ '#Front-end','#HTML','#CSS','#JS','#React','#Web-design' ],
    desc: 'Front end developer. Specializing in react. I love reading and active recreation',
  }
}


const homeReducer = (state = initialState , action) => { 

  switch(action.type){
    case ADD_POST: 
      var date = new Date();
      var day = date.getDay();   
      day = day <= 10 ? '0' + day : day;
     
      const month = date.toLocaleString('en-us', { month: 'long' });
      var year = date.getFullYear();    

      let newPost = {
        id: 4,
        date: `${day} ${month} ${year}`,
        text: state.newPostText,
        tags: 'Web Design'
      }      
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }    
    case CHANGE_AREA:    
      return {
        ...state,
        newPostText: action.text
      }   
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