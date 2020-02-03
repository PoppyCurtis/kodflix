import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Gallery from './Gallery.js';
import Details from './Details/details.js';
import NotFound from './NotFound.js';
import ReactGA from 'react-ga';
import Menu from './Menu/Menu';
import './App.css';

class App extends Component {
  render() {

    ReactGA.initialize('UA-157101100-1');
    ReactGA.pageview(window.location.pathname);

    return (
      <div>
      
        <div className="Gallery"> 
        <Menu />   
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:tvShowId' component={Details} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
