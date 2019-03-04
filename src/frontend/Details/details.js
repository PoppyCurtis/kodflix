import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './details.css';
import '../Loading/Loading.css';
import Loading from '../Loading/Loading';


export default class extends React.Component {

    constructor() {
        super();
        this.state = {
            gallery: {}
        };
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => {
                return response.json();
            })
            .then(galleries => {
                let galleryImageId = this.props.match.params.tvShowId;
                let gallery = galleries.find(show => show.id === galleryImageId);
                this.setState({ gallery: gallery });
            });
    }

    render() {
        let gallery = this.state.gallery;
        if (this.state.gallery === undefined) {
            return <Redirect to='/not-found'></Redirect>;
        }
        else if (this.state.gallery.id) {
            return (

                <div className="details">

                    <h1>{gallery.name}</h1>
                    <div className="content">
                        <div className="text">{gallery.details}</div>
                        <div className="image" >
                            <img
                                src={require(`../common/images/${gallery.id}.jpg`)}
                                alt={`${gallery.id}`}
                            />
                        </div>
                    </div>
                    <Link to="/">Back to Home page</Link>
                </div>
            );
        }

        else {
            return (
                <div className="container">
                    <Loading />
                </div>
            );
        }
    }

}

