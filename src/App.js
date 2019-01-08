import React, { Component } from 'react';
import bigHero6 from './images/bighero.jpg';
import got from './images/got.jpg';
import suits from './images/suits.jpg';
import ointb from './images/ointb.jpg';
import fairyTale from './images/fairytale.jpg';
import insideOut from './images/insideOut.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <div className="container">
        <div className="item">
          <img src={suits} alt='Picture of Suits'/>
          <div className='overlay'>
           <h1>Suits</h1>
          </div>
        </div>
        <div className="item">
          <img src={got} alt='Picture of Game of Thrones'/>
          <div className='overlay'>
           <h1>Game Of Thrones</h1>
          </div>
        </div>
        <div className="item">
          <img src={insideOut} alt='Picture of Inside Out'/>
          <div className='overlay'>
           <h1>Inside Out</h1>
          </div>
        </div>         
      </div>
      <div className="container">
        <div className="item">
          <img src={bigHero6} alt='Picture of Big Hero 6'/>
          <div className='overlay'>
           <h1>Big Hero 6</h1>
          </div>
        </div>
        <div className="item">
          <img src={fairyTale} alt='Picture of Fairy Tail'/>
          <div className='overlay'>
           <h1>Fairy Tail</h1>
          </div>
        </div>
        <div className="item">
          <img src={ointb} alt='Picture of Orange is the New Black'/>
          <div className='overlay'>
           <h1>Orange Is The New Black</h1>
          </div>
        </div>         
      </div>
      </div>
    );
  }
}

export default App;
