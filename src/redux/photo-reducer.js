export const ADD_PHOTO = 'ADD-PHOTO';
export const DELETE_PHOTO = 'DELETE-PHOTO';

let initialState = {
   photos: [
     { id: 1 , src: 'https://miro.medium.com/max/876/1*9Is8boeyB3vkzNs4uwF95g.png'},
     { id: 2 , src: 'https://belajarreactjs.com/wp-content/uploads/2019/09/reactjs2.jpg'},
     { id: 3 , src: 'https://img3.goodfon.ru/wallpaper/nbig/2/73/moraine-lake-valley-of-the-6804.jpg'},
     { id: 4 , src: 'https://www.prikol.ru/wp-content/gallery/november-2011/geirangerfjord-01-big.jpg'},
     { id: 5 , src: 'https://s3.amazonaws.com/codementor_content/2016-Oct/vue.jpg'},
     { id: 6 , src: 'https://27sysday.ru/wp-content/uploads/2021/05/vue-js.jpg'},
     { id: 7 , src: 'https://geekcrunchhosting.com/wp-content/uploads/2019/02/laravel.jpg'}
   ]   
}

const photosReducer = (state = initialState , action) => { 
  switch(action.type){
    case ADD_PHOTO:      
      return {
        ...state,
        photos: [...state.photos, {id:8, src:action.imgsrc}]        
      }     
    case DELETE_PHOTO:
      
      return {
        ...state,
        photos: [...state.photos.map(u => {   
           
                 
              if ( u.id === +action.id ){
                   
                
              }  
              return u;      
            }
          )
        ]     
      }
    default: 
      return state
  } 
  
}

export const addPhoto = (imgsrc) => {
  return {
    type: ADD_PHOTO,
    imgsrc: imgsrc
  }
}
export const deletePhoto = (id) => {
  return {
    type: DELETE_PHOTO,
    id: id
  }
}
export default photosReducer;