import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

import RequireAdmin from '../auth/requireAdmin';

class NewsletterGrid extends Component {
    
    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchNewsletters();
        }, 1000);
    }

    render() {
        return (
            <div className='newsletter-grid'>
                <RequireAdmin>
                    <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
                </RequireAdmin>
                <NewsletterBox {...this.props.latestNewsletter} />
                <NewsletterArchive/>
                <NewsletterLatest {...this.props.latestNewsletter}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        latestNewsletter
    }
}

export default connect(mapStateToProps, actions)(NewsletterGrid);