import { combineReducers, createStore } from "redux";
import homeReducer from './home-reducer';
import messagesReducer from './messages-reducer';
import themeReducer from './theme-reducer';

let reducers = combineReducers({
  homePage: homeReducer,
  messagesPage: messagesReducer,
  bodyTheme: themeReducer,
});

let store = createStore(reducers);


export default store;