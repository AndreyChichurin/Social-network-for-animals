import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

import Navbar from './components/scenes/Navbar/Navbar'
import Router from './components/Router/Router';


function App() {
  console.log(localStorage)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
