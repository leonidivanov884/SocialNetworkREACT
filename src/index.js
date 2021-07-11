import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';





let renderTree = (state) => {
  
  ReactDOM.render(  
    <React.StrictMode>

      <App  state={state} dispatch={store.dispatch.bind(store)} />


    </React.StrictMode>,
    document.getElementById('root')
  );
}



renderTree(store.getState());


store.subscribe(() => {
  let state = store.getState()
  renderTree(state)
});