import React, { useEffect, useState } from 'react';
import "./main.css";

// Formulario
import Formulario from '../../components/Formulario';

import axios from 'axios';

// Layouts
import Main from '../../layouts/Main';

// Components
import CardAlert from '../../components/CardAlert'

const MainPage = () => {
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
    <Main>
      {
        alertsData && alertsData.map(alert => <CardAlert data={alert} />)
      }
    </Main>
  </div>
}

export default MainPage;