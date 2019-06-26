import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import dogs from './pages/dogs';
import details from './pages/details';

import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route exact path="/"               component={Home}   />
              <Route exact path="/dogs"           component={dogs}   />
              <Route exact path="/details/:dogId" component={details}/>
            </Switch>
      </Router>
  );
}
}

export default App;
