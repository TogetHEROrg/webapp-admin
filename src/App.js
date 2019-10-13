import React, { createElement } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";

// Pages
import MainPage from './pages/main';
import LoginAdmin from './pages/loginAdmin';

const App = () => {
  const accessToken = localStorage.getItem('access_token');

  return <Router>
    <Route path="*" render={(props) => <Redirect to="/admin" />} />
    <Route path="/admin" render={(props) => accessToken ? createElement(MainPage, props) : <Redirect to="/login" />} />
    <Route path="/login" exact component={LoginAdmin} />
  </Router>
}

export default App;