import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './components/Layout/Layout';
import LandingPage from './container/LandingPage/LandingPage';
import Forecast from './container/Forecast/Forecast';


const App = props => {

  let routes = (
    <Switch>
      <Route path='/forecast/:query' component={Forecast} /> />
      <Route exact path='/' component={LandingPage} />
      <Redirect to='/' />
    </Switch>

  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        {routes}
      </Layout>
    </React.Fragment>
  );
}

export default App;
