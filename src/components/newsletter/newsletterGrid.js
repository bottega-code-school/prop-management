import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {
    
    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    componentDidMount() {
        this.props.fetchNewsletters();
    }

    render() {

        const latest = {
            _id: '115',
            title: 'Happy Holidays Fam',
            body: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }

        return (
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        )
    }
}

export default connect(null, actions)(NewsletterGrid);