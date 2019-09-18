import React, { useEffect, useState } from 'react';
import "./App.css";

// Formulario
import Formulario from './Formulario';

import axios from 'axios';

// Layouts
import Main from './layouts/Main';

// Components
import CardAlert from './components/CardAlert'

const App = () => {
  const [alertsData, setAlertsData] = useState(null);

  useEffect(() => {
    handleGetAlerts();
  }, [])

  const handleGetAlerts = () => {
    axios.get('http://localhost:3001/alertas').then(res => {
      setAlertsData(res.data)
    })
  }

  return <div className="main">
  <Formulario/>
    <Main>
      {
        alertsData && alertsData.map(alert => <CardAlert data={alert} />)
      }
    </Main>
  </div>
}

export default App;