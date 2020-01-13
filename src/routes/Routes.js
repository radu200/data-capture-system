import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AttendeeList from '../containers/EventAttendeeList';
import  DataCapture from '../containers/DataCapture'
import Thanks from '../components/pages/Thanks';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AttendeeList} />
      <Route exact path="/capture" component={DataCapture} />
      <Route exact path="/thanks" component={Thanks} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
