export const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
export const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
}

const messagesReducer = (state = initialState , action) => { 

  switch(action.type){
    case CHANGE_MESSAGE: 
      return {
        ...state,
        newMessageText: action.text
      }     
    case ADD_MESSAGE:         
      let stateCopy = {
        ...state, 
           
      };
      stateCopy.messages[action.nomber].text = [...state.messages[action.nomber].text];      
      stateCopy.messages[action.nomber].text.push(stateCopy.newMessageText)  
      stateCopy.newMessageText = ''    
      return stateCopy

    default: 
      return state
  } 
  
}

export const changeMessageActionCreator = (text) => {
  return {
    type: CHANGE_MESSAGE,
    text: text
  }
}
export const addMessageActionCreator = (nomber) => {
  return {
    type: ADD_MESSAGE,
    nomber: nomber
  }
}
export default messagesReducer;