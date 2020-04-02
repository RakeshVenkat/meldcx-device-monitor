import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import DeviceMonitor from './components/DeviceMonitor';
import Login from './components/Login';
import { connect } from 'react-redux';
import NotFoundPage from './components/NotFound';

function AppBaseView({isLoggedIn}) {
  return (
    <Fragment>
    <Router>
      
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/devices" /> : <Login />}
        </Route>
        {isLoggedIn && <Route path="/devices" component={DeviceMonitor}/>}
        <Route component={NotFoundPage} />
    </Switch>
  
    </Router>
  </Fragment>
  );
}


const mapStateToProps = state => {
  const {
    message,
    isLoggedIn
  } = state.login

  return {
    message,
    isLoggedIn
  }
}

export default connect(mapStateToProps)(AppBaseView);
