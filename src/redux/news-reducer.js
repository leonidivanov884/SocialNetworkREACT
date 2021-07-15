let initialState = {  
    news:  [  
        {
            id: 1,          
            img: 'https://vgtimes.ru/uploads/gallery/main/145150/bb90124e41889c5885620caa9a472bc4.jpg',        
            text: 'The tool is so powerful in performance and functionality, making the environment better',
            title: 'Redus',
            date: '14 January 2021',
            author: 'Jake Jelenhol'
        }, 
        {
            id: 2,          
            img: 'https://miro.medium.com/max/1200/1*Tci3EBiX5vN2_WTTDdfa7w.jpeg',        
            text: 'The tool is so powerful in performance and functionality, making the environment better',
            title: 'Реакт redus ты, знать будешь крута',
            date: '14 January 2021',
            author: 'Jake Jelenhol'
        }, 
        {
            id: 3,          
            img: 'https://miro.medium.com/max/1200/1*EjHeVy-zB4YzI0PDuFs3Aw.png',        
            text: 'The tool is so powerful in performance and functionality, making the environment better',
            title: 'Vue - new framework',
            date: '14 January 2021',
            author: 'Jake Jelenhol'
        },   
        {
            id: 4,          
            img: 'https://i.morioh.com/45462b4b4b.png',        
            text: 'The tool is so powerful in performance and functionality, making the environment better',
            title: 'Title 4',
            date: '14 January 2021',
            author: 'Jake Jelenhol'
        }, 
        {
            id: 5,          
            img: 'https://sun9-51.userapi.com/kV570NWirxm4yu_rVikAzG3ChvM4sdPRuNQUAg/o-g97b4edEo.jpg',        
            text: 'The tool is so powerful in performance and functionality, making the environment better',
            title: 'Title box',
            date: '14 January 2021',
            author: 'Jake Jelenhol'
        }, 
        {
            id: 6,          
            img: 'https://i.ytimg.com/vi/5W3FTVYtz2A/maxresdefault.jpg',        
            text: 'The tool is so powerful in performance and functionality, making the environment better',
            title: 'New Java Script',
            date: '14 January 2021',
            author: 'Jake Jelenhol'
        },   
    ],
  }
  
  
  const newsReducer = (state = initialState , action) => { 
    
    return state
  }
  
  export default newsReducer;