import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="container">
        <div className="item">Big Hero 6</div>
        <div className="item">Game of Thrones</div>
        <div className="item">Orange is the New Black</div>         
      </div>
      <div className="container">
        <div className="item">Suits</div>
        <div className="item">Fairy Tail</div>
        <div className="item">Inside Out</div>         
      </div>
      </div>
    );
  }
}

export default App;
