import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';

class NewsletterGrid extends Component {
    render() {
        return (
            <div className='newsletter-grid'>
                {/* add button */}
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                {/* content */}
            </div>
        )
    }
}

export default NewsletterGrid;