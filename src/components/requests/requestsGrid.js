import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from '../button';

import RequestsBoxes from './requestsBoxes';
import Requests from './requests';

import RequireAdmin from '../auth/requireAdmin';

class RequestsGrid extends Component {

    handleAddRequest = () => {
        this.props.history.push('/request/new');
    }

    componentDidMount() {
        this.props.fetchRequests()
    }

    render() {
        return (
            <div className='requests-grid'>
                <RequireAdmin>
                    <Button className='requests-grid__button' icon='fas fa-plus' callback={() => this.handleAddRequest()}/>
                </RequireAdmin>
                <RequestsBoxes/>
                <Requests/>
            </div>
        )
    }
}

RequestsGrid = connect(null, actions)(RequestsGrid)

export default RequestsGrid;