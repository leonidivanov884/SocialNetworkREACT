import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';





let renderTree = (state) => {
  
  ReactDOM.render(  
    <React.StrictMode>
      <Provider store={store} >
        <App  state={state} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}



renderTree(store.getState());


