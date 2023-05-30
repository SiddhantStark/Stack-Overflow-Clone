import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Reducers from'./reducers';
// store will store all the states of our application
const store= createStore(Reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
