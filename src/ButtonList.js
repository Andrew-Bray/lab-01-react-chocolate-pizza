import React, { Component } from 'react'

export default class ButtonList extends Component {
    render() {
        return (
            <div className="social-media">
                <img src="assets/fb-icon.png" alt="icons" />
                <img src="assets/twit-icon.png" alt="icons" />
                <img src="assets/gp-icon.png" alt="icons" />
                <img src="assets/insta-icon.png" alt="icons" />
                <img src="assets/flic-icon.png" alt="icons" />
                <img src="assets/pint-icon.png" alt="icons" />
                <img className="contact-icon" src="assets/rss-icon.png" alt="icons" />
                <img src="assets/mail-icon.png" alt="icons" />
            </div>
        )
    }
}