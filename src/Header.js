import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (

            <div>
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
                    <div className="social-media">
                        <img src="assets/fb-icon.png" />
                        <img src="assets/twit-icon.png" />
                        <img src="assets/gp-icon.png" />
                        <img src="assets/insta-icon.png" />
                        <img src="assets/flic-icon.png" />
                        <img src="assets/pint-icon.png" />
                        <img className="contact-icon" src="assets/rss-icon.png" />
                        <img src="assets/mail-icon.png" />
                    </div>
                </div>
            </div>
        )
    }
}
