export const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
export const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
   messages: [
    {id:'1' , ava: 'https://i12.fotocdn.net/s120/ac926f69e64328f9/user_l/2744669555.jpg' ,  name: 'Julia Monro' , date: 'now', count: '1', text: ['H11ello!! What are you doing? May be we go to park', 'In order for me to become kind',' What are you doing? May be we go to park','In order for me']},
    {id:'2' , ava: 'https://vraki.net/sites/default/files/inline/images/13_115.jpg' ,  name: 'Stanley Taylor' , text: ['I\'m surprised. Perhaps he was misunderstood?'], date: 'today', count: '3'},
    {id:'3' , ava: 'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/01e5f45e5d254390875c5c2880364c1d.png' ,  name: 'Jack ' , text: ['Hi','Today I met Alexander. He asked me why I didn\'t answer his calls. I lied that I was busy at work.','Lorem In order for me to become kind, I need to replace anger with'], date: 'today', count: '5'},
    {id:'4' , ava: 'http://andrey-eltsov.ru/wp-content/uploads/2019/01/Agh-45juD_4uyAWb_5mj-d5_djhcgUng-Hgdt6-dj_jtu-Крутые-картинки.jpg' ,  name: 'Peter Davis' , text: ['What are you interested in?'], date: 'yesterday', count: ''},
    {id:'5' , ava: 'https://vraki.net/sites/default/files/mood/u.jpg' ,  name: 'Ruth Baker' , text: ['If you take away my anger, I will become a jellyfish. In order for me to become kind, I need to replace anger with kindness.'], date: 'yesterday', count: ''},
    {id:'6' , ava: 'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/a980b3c8293c4871b04df0603f2268a4.jpg' ,  name: 'Helen Henry' , text: ['It sounds a little ridiculous'], date: '13.12.2019', count: ''},
    {id:'7' , ava: 'https://steamuserimages-a.akamaihd.net/ugc/785248611494712343/63399777138EB7733A6649FA7E213C298182A187/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true' ,  name: 'Cory Davidson' , text: ['What does "dreams"mean?'], date: '10.12.2019', count: '5'}
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
      let stateCopy = {...state};
      stateCopy.messages[action.nomber].text = [...state.messages[action.nomber].text];      
      stateCopy.messages[action.nomber].text.push(stateCopy.newMessageText)  
      stateCopy.newMessageText = ''    
      return stateCopy

    default: 
      return state
  } 
  
}

export const onNewMessageText = (text) => {
  return {
    type: CHANGE_MESSAGE,
    text: text
  }
}
export const onAddMessage = (nomber) => {
  return {
    type: ADD_MESSAGE,
    nomber: nomber
  }
}
export default messagesReducer;