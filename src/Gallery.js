import React from 'react';
import TvShow from './TvShow.js';
import getImageGallery from './getGalleryImages';

export default function Gallery() {
    return (
        <div>
            <div className="container">
                {
                    getImageGallery().map(tvShow =>
                        (
                            <TvShow
                                key={tvShow.id}
                                id={tvShow.id}
                                name={tvShow.name}
                                logo={tvShow.logo} />
                        )
                    )
                }
            </div>
        </div>
    );
}

