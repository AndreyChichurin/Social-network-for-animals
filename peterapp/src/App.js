import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/scenes/Navbar/Navbar";

import Routes from "./components/Routes/Routes";

import { Provider } from "react-redux";
import { store } from "../src/components/scenes/Bot/Bot/chat";
import { CurrentUserProvider } from "./contexts/currentUser";
import Footer from "./components/scenes/Footer/Footer.js";
// import CurrentUserChecker from './components/currentUserChecker';

const App = () => {
  return (
    <CurrentUserProvider>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </Provider>
      
    </CurrentUserProvider>
  );
};

export default App;
