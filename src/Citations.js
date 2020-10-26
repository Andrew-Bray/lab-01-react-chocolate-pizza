import React, { Component } from 'react'

export default class Citations extends Component {
    render() {
        return (
            <section className="citations">
                <div className="top-citation">
                    <p>Delicious &copy; 2013 &#183; All Rights Reserved.</p>
                </div>
                <div className="bottom-citation">
                    <p>Proudly published with Ghost.</p>
                </div>
            </section>
        );
    }
}