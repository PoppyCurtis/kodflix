import React, { Component } from 'react';
import './Menu.css';

export default class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            menuIsVisible: false
        };
    }

    buttonClick = event => {

        if (this.state.menuIsVisible === false) {
            this.setState({ menuIsVisible: true });
        }
        else {
            this.setState({ menuIsVisible: false });
        }
    }

    render() {

        return (
            <div id='menuContainer'>
                <button id="menu" onClick={this.buttonClick}
                >
                    <i className="fa fa-bars" id="image"></i>
                </button>
                <div className={(this.state.menuIsVisible === true ? 'is-visible' : 'not-visible')}>
                    <nav class="side-drawer">  
                    <button id="menu" onClick={this.buttonClick}
                >
                    <i className="fa fa-bars" id="image" ></i>
                    </button>
                        <ul>
                          
                            <li>
                               
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}