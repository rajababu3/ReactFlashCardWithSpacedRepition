import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import App from './components/App';
import Sidebar from './components/Sidebar';
import * as reducers from './reducers';

const store = createStore(combineReducers(reducers));

function run() {
  let state = store.getState();
ReactDOM.render((<Provider store={store}>
  <App>
    <Sidebar    />
  </App>
  </Provider>), document.getElementById('root')
);
}
run();

store.subscribe(run);
