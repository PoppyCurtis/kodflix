import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery.js';
import Details from './Details/details.js';
import NotFound from './NotFound.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Gallery">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:tvShowId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}
fetch('/rest/shows')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
export default App;
