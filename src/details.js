import React from 'react';
import { Link } from 'react-router-dom';
import getGalleryImages from './getGalleryImages.js';

export default class extends React.Component {

    constructor() {
        super();
        this.state = {
            gallery: {}
        };
    }

    componentDidMount() {
        let galleryImageId = this.props.match.params.tvShowId;
        let gallery = getGalleryImages()
            .find(gallery => gallery.id === galleryImageId);
        this.setState({ gallery: gallery });
    }

    render() {
        return (
            <div>
                <h1>{this.state.gallery.name}</h1>
                <Link to="/">Back to Home page</Link>
            </div>
        );
    }

}

