let initialState = {  
  friends:  [  
    {
        id: 10,
        friend: true,
        img: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png',
        name: 'Alex',
        status: 'The tool is so powerful in performance and functionality, making the environment better',
    },
    {
        id: 11,
        friend: false,
        img: 'https://klike.net/uploads/posts/2018-06/1528377344_7.jpg',
        name: 'Dmitriy',
        status: 'The tool is so powerful in performance and functionality, making the environment better',
    },
    {
        id: 12,
        friend: true,
        img: 'http://img1.joyreactor.cc/pics/post/full/Стиль-Futurama-Футурама-Филипп-Фрай-Fry-236927.jpeg',
        name: 'Kail',
        status: 'The tool is so powerful in performance and functionality, making the environment better',
    },
  ],
}


const friendsReducer = (state = initialState , action) => {   
  return state
}

export default friendsReducer;