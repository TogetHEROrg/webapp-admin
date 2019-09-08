import React from 'react';

// Layouts
import Main from './layouts/Main';

// Components
import CardAlert from './components/CardAlert'

const App = () => {
  return <div>
    <span>Hola! Este es un componente</span>
    <Main>
      {
        [1, 2, 3, 4, 5, 6].map(infoDeLaAlerta => <CardAlert data={infoDeLaAlerta}/>)
      }
    </Main>
  </div>
}

export default App;