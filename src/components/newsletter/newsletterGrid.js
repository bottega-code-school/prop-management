import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
    render() {
        return (
            <div className='newsletter-grid'>
                {/* add button */}
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest/>
            </div>
        )
    }
}

export default NewsletterGrid;