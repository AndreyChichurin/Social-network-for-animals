import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bot from './bot';
import {Provider} from 'react-redux';
import {store} from './chat'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={store}>
  <Bot />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
