import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/scenes/Navbar/Navbar'

import Routes from './components/Routes/Routes';

import { Provider } from 'react-redux';
import { store } from '../src/components/scenes/Bot/Bot/chat'

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes />
    </Router>
    </Provider>
  );
}

export default App;
