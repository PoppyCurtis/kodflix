import React from 'react';
import bigHero6 from './images/bighero.jpg';
import got from './images/got.jpg';
import suits from './images/suits.jpg';
import ointb from './images/ointb.jpg';
import fairyTale from './images/fairytale.jpg';
import insideOut from './images/insideOut.jpg';
import TvShow from './TvShow.js';

export default function Gallery() {
    return (
        <div>
            <div className="container">
                <TvShow  name="Suits" logo={suits} id="suits"/>
                <TvShow name="Game of Thrones" logo={got} id="got" />
                <TvShow name="Inside Out" logo={insideOut} id="insideout"/>
            </div>
            <div className="container">
                <TvShow name="Big Hero 6" logo={bigHero6} id="bighero"/>
                <TvShow name="Fairy Tail" logo={fairyTale} id="fairytail"/>
                <TvShow name="Orange Is The New Black" logo={ointb} id="ointb"/>
            </div>
        </div>
    );
}
