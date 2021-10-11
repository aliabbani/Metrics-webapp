import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NotMatch from '../pages/NotMatch';
import Home from './Home';
import Details from './Details';

const AppContainer = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </div>
);

export default AppContainer;
