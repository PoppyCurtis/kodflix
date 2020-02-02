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
        let galleryImageId = this.props.match.params.tvShowId;
        fetch(`/shows/${galleryImageId}`)
            .then(response => {
                return response.json();
            })
            .then(galleries => {
                this.setState({ gallery: galleries });
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

