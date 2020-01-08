import React from 'react';

import Layout from './components/Layout/Layout';
import LandingPage from './container/LandingPage/LandingPage';


const App = props => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
}

export default App;
