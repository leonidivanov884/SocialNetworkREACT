import { combineReducers, createStore } from "redux";
import homeReducer from './home-reducer';
import messagesReducer from './messages-reducer';
import themeReducer from './theme-reducer';
import friendsReducer from './friends-reducer';
import userReducer from './users-reducer';
import photosReducer from './photo-reducer';
import newsReducer from "./news-reducer";

let reducers = combineReducers({
  homePage: homeReducer,
  messagesPage: messagesReducer,
  bodyTheme: themeReducer,
  friendsPage: friendsReducer,
  photosPage: photosReducer,
  newsPage: newsReducer,
  users: userReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;