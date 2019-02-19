import bigHero6 from './images/bighero.jpg';
import got from './images/got.jpg';
import suits from './images/suits.jpg';
import ointb from './images/ointb.jpg';
import fairyTale from './images/fairytale.jpg';
import insideOut from './images/insideOut.jpg';

export default function getGallery() {
    return [
        { id: "suits", name: "Suits", logo: suits, details: "In Suits, one of Manhattan's top corporate lawyers (Gabriel Macht) sets out to recruit a new hotshot associate and hires the only guy that impresses him, a brilliant but unmotivated college dropout (Patrick J. Adams). Though he isn't actually a lawyer, this legal prodigy has the book smarts of a Harvard law grad and the street smarts of a hustler. However, in order to serve justice and save their jobs, both these unconventional thinkers must continue the charade."},
        { id: "got", name: "Game of Thrones", logo: got, details: "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years."},
        { id: "insideout", name: "Inside Out", logo: insideOut, details: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school." },
        { id: "bighero", name: "Big Hero 6", logo: bigHero6, details: "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes." },
        { id: "fairytail", name: "Fairy Tail", logo: fairyTale, details: "Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail." },
        { id: "ointb", name: "Orange Is The New Black", logo: ointb, details: "Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law-abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life-changing prison can really be." }
    ];
}
