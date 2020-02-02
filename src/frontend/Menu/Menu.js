import React, { Component } from 'react';
import './Menu.css';

export default class Gallery extends Component {

    buttonClick = event => {
        console.log('clicked!')
    }

    render() {
        return (
            <button id="menu" onClick={this.buttonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
                </svg>
            </button>
        );
    }
}