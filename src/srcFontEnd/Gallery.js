import React, { Component } from 'react';
import TvShow from './TvShow.js';
//import getImageGallery from './getGalleryImages';


export default class Gallery extends Component {
    constructor() {
        super()
        this.state = {
           movies: []
        }
    }


    componentDidMount() {
        fetch('/rest/shows')
            .then(function (response) {
                return response.json();
            })
            .then(function (movies) {
                this.setState({ movies: movies })
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    {
                        this.state.movies.map(movie => (
                            <TvShow id={movie.id} name={movie.name} />
                        ))
                    }
                </div>
            </div>
        );
    }
}




