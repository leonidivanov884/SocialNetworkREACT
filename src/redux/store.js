import homeReducer from './home-reducer';
import messagesReducer from './messages-reducer';
import themeReducer from './theme-reducer';


let store = {
  _state : {
    bodyTheme: 'dark',  

    messagesPage: {
      messages: [
        {id:'1' , name: 'Julia Monro' , date: 'now', count: '1', text: ['H11ello!! What are you doing? May be we go to park', 'In order for me to become kind',' What are you doing? May be we go to park','In order for me']},
        {id:'2' , name: 'Stanley Taylor' , text: ['I\'m surprised. Perhaps he was misunderstood?'], date: 'today', count: '3'},
        {id:'3' , name: 'Jack ' , text: ['Hi))','Today I met Alexander. He asked me why I didn\'t answer his calls. I lied that I was busy at work.','Lorem In order for me to become kind, I need to replace anger with'], date: 'today', count: '5'},
        {id:'4' , name: 'Peter Davis' , text: ['What are you interested in?'], date: 'yesterday', count: ''},
        {id:'5' , name: 'Ruth Baker' , text: ['If you take away my anger, I will become a jellyfish. In order for me to become kind, I need to replace anger with kindness.'], date: 'yesterday', count: ''},
        {id:'6' , name: 'Helen Henry' , text: ['It sounds a little ridiculous'], date: '13.12.2019', count: ''},
        {id:'7' , name: 'Cory Davidson' , text: ['What does "dreams"mean?'], date: '10.12.2019', count: '5'}
      ],
      newMessageText: ''      
    },
    homePage: {
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
  },
  _callSubscriber(){
    console.log('stare  changed');
  },
  
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state.homePage = homeReducer(this._state.homePage , action)    
    this._state.messagesPage =  messagesReducer(this._state.messagesPage , action)
    this._state.bodyTheme =  themeReducer(this._state.bodyTheme , action)  
           
    this._callSubscriber(this._state)
  }
}


export default store;
window.store = store;