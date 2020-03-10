import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnnouncementForm from "./components/AnnouncementForm"
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import Grid from "@material-ui/core/Grid";

import Navbar from "./components/scenes/LogIn/navbar/navbar";
import PersonalPage from "./components/cabinet";

import Button from "@material-ui/core/Button";
import Router from "./components/Router/Router";

import ControlledOpenSelect from "./components/Filter/filter";

function App() {
  return (
    <div className="container">
    <Provider store={store}>
      <div>
        <div className="App"></div>
      </div>
      <BrowserRouter>
        <Navbar />
        <Router />
        <PersonalPage />
      </BrowserRouter>
      <AnnouncementForm/>
    </Provider>
    </div>
  );
}

export default App;
