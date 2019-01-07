import React, { Component } from 'react';
import moviePicture from './nextgen.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={moviePicture} alt='nextgen picture'/>
      </div>
    );
  }
}

export default App;
