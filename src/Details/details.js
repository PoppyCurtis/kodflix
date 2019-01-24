import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './details.css';
import getGallery from '../getGalleryImages.js';

export default class extends React.Component {

    constructor() {
        super();
        this.state = {
            gallery: {}
        };
    }

    componentDidMount() {
        let galleryImageId = this.props.match.params.tvShowId;
        let gallery = getGallery()
            .find(gallery => gallery.id === galleryImageId);
        this.setState({ gallery: gallery });
    }

    render() {
        if (this.state.gallery === undefined) {
            return <Redirect to='/not-found'></Redirect>;
        }
        else {
            return (
                <div className="details">
                    <h1>{this.state.gallery.name}</h1>
                    <div className="content">
                        <div className="text">{this.state.gallery.details}</div>
                        <div className="image" >
                            <img src={this.state.gallery.logo}
                                alt={this.state.gallery.name}></img>
                        </div>
                    </div>
                    <Link to="/">Back to Home page</Link>
                </div>
            );
        }
    }

}

