import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>Title goes here</h1>
                <img className='newsletter-latest__image' src='http://via.placeholder.com/960x258'/>
                <div className='newsletter-latest__body'>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;