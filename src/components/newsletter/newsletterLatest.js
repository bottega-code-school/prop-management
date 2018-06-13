import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>Title goes here</h1>
                <img className='newsletter-latest__image' src='http://via.placeholder.com/960x258'/>
                <div className='newsletter-latest__body'>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;