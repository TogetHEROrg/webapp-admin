import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Pages
import MainPage from './pages/main';
import LoginAdmin from './pages/loginAdmin';

const App = () => {
  return <Router>
    <Route path="/MainPage" exact component={MainPage} />
    <Route path="/" exact component={LoginAdmin} />
  </Router>
}

export default App;