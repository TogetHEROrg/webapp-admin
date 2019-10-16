import React, { Fragment, useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import './styles.css';
import M from 'materialize-css';

// Firebase
import firebase from 'firebase';
import { providers, firebaseAppAuth } from '../../services/auth';
import withFirebaseAuth from 'react-with-firebase-auth';

// Components
import CardAlert from '../../components/CardAlert';

const Dashboard = ({ signOut }) => {
  const db = firebase.firestore();

  db.settings({
    timestampsInSnapshots: true,
  });

  const [reports, setReports] = useState([]);

  useEffect(() => {
    db.collection('reclamos')
      .orderBy('date', 'desc')
      .onSnapshot(doc => {
        const newDocs = doc.docChanges().map(({ doc }) => doc.data());

        setReports(reps => newDocs.concat(reps));

        M.toast({
          html:
            '<span>Nuevo reclamo!</span><button class="btn-flat toast-action">🚨</button>',
        });
      });
  }, []);

  const handleSignOut = () => {
    signOut()
      .then(() => window.localStorage.removeItem('access_token'))
      .then(() => window.location.replace('/login'))
      .catch(() => window.localStorage.removeItem('access_token'))
      .then(() => window.location.replace('/login'));
  };

  const Row = ({ index, style }) => (
    <div style={style}>{reports[index] && <CardAlert data={reports[index]} />}</div>
  );

  return (
    <Fragment>
      <nav>
        <div className="text">Together App | Administrador</div>
      </nav>

      <div className="container container-list">
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="List"
              width={width}
              height={height}
              itemCount={reports.length}
              itemSize={56}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>

      <div className="fixed-action-btn" onClick={handleSignOut}>
        <a className="btn-floating btn-large red">
          <i className="large material-icons">exit_to_app</i>
        </a>
      </div>
    </Fragment>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Dashboard);
