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
                <TvShow name="Suits" logo={suits} />
                <TvShow name="Game of Thrones" logo={got} />
                <TvShow name="Inside Out" logo={insideOut} />
            </div>
            <div className="container">
                <TvShow name="Big Hero 6" logo={bigHero6} />
                <TvShow name="Fairy Tail" logo={fairyTale} />
                <TvShow name="Orange Is The New Black" logo={ointb} />
            </div>
        </div>
    );
}
