var express = require('express')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient

var app = express();

var db;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var users = [{
  info: {
    id: 1,
    friends: false,
    baner: "https://i12.fotocdn.net/s120/ac926f69e64328f9/user_l/2744669555.jpg",
    login: "@loreminpus",
    avatar: "https://steamuserimages-a.akamaihd.net/ugc/785248611494712343/63399777138EB7733A6649FA7E213C298182A187/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
    name: "testCory Davidson",
    date: "10.12.2019",
    socials: {
      github: "githublink",
      linkedin: "linkinvk",
      vk: "linkinvk",
      telegram: "linkinvk",
      instagram: "linkininstagram",
      facebook: "linkinfacebook"
    },
    contacts: {
      phone: "79124800193",
      birthday: "-",
      geo: "Russia: Kamenst"
    },
    tags: ["#JAVA", "#CANVAS", "#JAVASCRIPT"],
    desc: "Developer. Specializing in react. I love reading and active recreation"
  },
  messageForYou: ["Hello", "How are you", "Cool :3", "Yes, i`m so happy"],
  posts: [{
    id: 1,
    date: "14 May 2021",
    text: "Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow"
  }, {
    id: 2,
    date: "11 May 2021",
    text: "Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав "
  }, {
    id: 3,
    date: "11 May 2021",
    text: "Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав "
  }, {
    id: 4,
    date: "11 May 2021",
    text: "Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав "
  }],
  newPostText: ""
}, {
  info: {
    id: 2,
    friends: true,
    baner: "https://guruadvisor.net/media/com_yendifevents/events/39/angular-day5bbf6c47ca93d.jpg",
    login: "@LeonidIvanovWeb",
    avatar: "https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarka-dlya-devushek-vatsap-1.jpg",
    name: "Kail XY",
    date: "10.12.2019",
    socials: {
      github: "linkingithub",
      linkedin: "linkinvk",
      vk: "linkinvk",
      telegram: "linkinvk",
      instagram: "linkininstagram",
      facebook: "linkinfacebook"
    },
    contacts: {
      phone: "79782598740",
      birthday: "26 March 2002",
      geo: "Russia: Moskow"
    },
    tags: ["#DEV", "#FACEBOOK", "#BACK"],
    desc: "Backend developer in facebook"
  },
  messageForYou: ["Hello", "How are you", "Cool :3", "Yes, i`m so happy"],
  posts: [{
    id: 1,
    date: "14 May 2021",
    text: "Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow"
  }, {
    id: 2,
    date: "11 May 2021",
    text: "Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав "
  }, {
    id: 4,
    date: "09 May 2021",
    text: "Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow"
  }, {
    id: 5,
    date: "05 May 2021",
    text: "Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow"
  }, {
    id: 6,
    date: "06 May 2021",
    text: "Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow"
  }, {
    id: 7,
    date: "02 May 2021",
    text: "Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow"
  }],
  newPostText: ""
}, {
  info: {
    id: 3,
    friends: true,
    baner: "http://wallpapers-images.ru/1680x1050/nature/wallpapers/wallpapers-nature-01.jpg",
    login: "@LeonidIvanovWeb",
    avatar: "https://w-dog.ru/wallpapers/7/0/537048719373665/avraam-linkoln-oxotnik-na-vampirov-topor-kreslo-cilindr.jpg",
    name: "Cory Davidson",
    date: "10.12.2019",
    socials: {
      github: "linkingithub",
      linkedin: "linkinvk",
      vk: "linkinvk",
      telegram: "linkinvk",
      instagram: "linkininstagram",
      facebook: "linkinfacebook"
    },
    contacts: {
      phone: "79222500547",
      birthday: "26 March 2002",
      geo: "Russia: City"
    },
    tags: ["#HR", "#REC", "#speaker"],
    desc: "A speaker is a transducing device that converts an electrical signal into an acoustic signal. The sound quality of any speaker greatly depends on the build quality and performance of the speaker."
  },
  messageForYou: ["Hello", "How are you", "Cool :3", "Yes, i`m so happy"],
  posts: [{
    id: 1,
    date: "14 May 2021",
    text: "Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow"
  }, {
    id: 2,
    date: "11 May 2021",
    text: "Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав "
  }],
  newPostText: ""
}, {
  info: {
    id: 4,
    friends: false,
    baner: "https://i.ytimg.com/vi/0J2zonPN8_A/maxresdefault.jpg",
    login: "@Kia",
    avatar: "https://demotivation.ru/wp-content/uploads/2020/11/30a8cefac6e2538341e57aecf419ee08.jpg",
    name: "Kia Naru",
    date: "02.01.2000",
    socials: {
      github: "linkingithub",
      linkedin: "linkinvk",
      vk: "linkinvk",
      telegram: "linkinvk",
      instagram: "linkininstagram",
      facebook: "linkinfacebook"
    },
    contacts: {
      phone: "-",
      birthday: "-",
      geo: "-"
    },
    tags: ["#HR", "#REC", "#speaker"],
    desc: "A speaker is a transducing device that converts an electrical signal into an acoustic signal. The sound quality of any speaker greatly depends on the build quality and performance of the speaker."
  },
  messageForYou: ["Hello", "How are you", "Cool :3", "Yes, i`m so happy"],
  posts: [{
    id: 1,
    date: "14 May 2021",
    text: "Chrome DevTools has become a must when it comes to modern web development. The tool is so powerful in performance and functionality, making the environment better and the process easier for many developers. I am sharing the most important keyboard shortcuts. 👉Follow"
  }, {
    id: 2,
    date: "11 May 2021",
    text: "Ырупнейшая коллекция бесплатных качественных аватарок для форумов и ... Скачать ав "
  }],
  newPostText: ""
}]


app.get('/', function (req, res) {
  console.log(`URL: ${req}`);
  res.send(`URL: ${req.url}`)
})

app.get('/users', function (req, res) {
  res.send(users)
})
app.get('/users/:id', function (req, res) {
  var user = users.find(function (user) {
    return user.info.id === +(req.params.id)
  })
  res.send(user)
})

app.post('/users', function (req, res) {
  console.log(req.body);
  res.send('post data');
})



MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database){
  if (err){
    return console.log(err);
  }
  db = database;

  app.listen(8000, function (request, response) {
    console.log('API app started');
  })
})