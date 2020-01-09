import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './components/Layout/Layout';
import LandingPage from './container/LandingPage/LandingPage';


const App = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <LandingPage />
      </Layout>
    </React.Fragment>
  );
}

export default App;
