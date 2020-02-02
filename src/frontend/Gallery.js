import React, { Component } from 'react';
import TvShow from './TvShow';
import Loader from './Loading/Loading'
import './Loading/Loading.css';


export default class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        fetch('/rest/shows')
            .then(response => {
                return response.json();
            })
            .then(movies => {
                this.setState({ movies: movies })
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    {
                        this.state.movies.length ?
                            this.state.movies.map(movie => (
                                <TvShow id={movie.id} name={movie.name} />
                            ))
                            : <div className="container">
                                <Loader />
                            </div>}
                </div>
            </div>
        );

    }
}

