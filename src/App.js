import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Pages
import MainPage from './pages/main';
import LoginPage from './pages/login';

const App = () => {
  return <Router>
    <Route path="/" exact component={MainPage} />
    <Route path="/login" exact component={LoginPage} />
  </Router>
}

export default App;