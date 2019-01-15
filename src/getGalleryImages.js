import bigHero6 from './images/bighero.jpg';
import got from './images/got.jpg';
import suits from './images/suits.jpg';
import ointb from './images/ointb.jpg';
import fairyTale from './images/fairytale.jpg';
import insideOut from './images/insideOut.jpg';

export default function getImageGallery() {
    return [
        { id: "suits", name: "Suits", logo: suits },
        { id: "got", name: "Game of Thrones", logo: got },
        { id: "insideout", name: "Inside Out", logo: insideOut },
        { id: "bighero", name: "Big Hero 6", logo: bigHero6 },
        { id: "fairytail", name: "Fairy Tail", logo: fairyTale },
        { id: "ointb", name: "Orange Is The New Black", logo: ointb }

    ];
}