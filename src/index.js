import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import App from './components/App';

import reportWebVitals from './reportWebVitals';

// create sagamiddleware
const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] : 
    [sagaMiddleware];

// create the store for props and add middleware
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewareList)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
