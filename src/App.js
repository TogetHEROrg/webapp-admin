import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Pages
import MainPage from './pages/main';
import LoginFirebase from './pages/loginFirebase';

const App = () => {
  return <Router>
    <Route path="/" exact component={MainPage} />
    <Route path="/loginFirebase" exact component={LoginFirebase} />
  </Router>
}

export default App;