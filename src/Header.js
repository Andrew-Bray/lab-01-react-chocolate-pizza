import React, { Component } from 'react'
import ButtonList from './ButtonList.js';

export default class Header extends Component {
    render() {
        return (

            <div className="header-section">
                <div className="header">
                    <div className="main-logo">
                        <img src="assets/logo.png" alt="a nice logo" />

                    </div>
                    <div className="main-logo-label">
                        <p className="logo-label1">Delicious</p>
                        <p className="logo-label2">THE BEST FOOD BLOG ON THE WEB.</p>
                    </div>
                </div>
                <div className="social-media-div">
                <ButtonList />
                </div>
            </div>
        )
    }
}
