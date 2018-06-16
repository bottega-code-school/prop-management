import React, { Component } from 'react';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

class NewsletterBox extends Component {
    render() {
        const { date } = this.props;
        if(!date) {
            return <div>fetching...</div>
        }
        const parsedDate = new Date(date);
        return (
            <div className='newsletter-box'>
                <div className='newsletter-box__day'>{parsedDate.getDate()}</div>
                <div className='newsletter-box__month-year'>{months[parsedDate.getMonth()]} {parsedDate.getFullYear()}</div>
                <div className='newsletter-box__point'></div>
            </div>
        )
    }
}

export default NewsletterBox;
