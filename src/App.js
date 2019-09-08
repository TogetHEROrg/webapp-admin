import React from 'react';
import "./App.css";

// Layouts
import Main from './layouts/Main';

// Components
import CardAlert from './components/CardAlert'

const App = () => {
  return <div className="main">
    <Main>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(alert => <CardAlert />) 
      } 
    </Main>
  </div>
}

export default App;