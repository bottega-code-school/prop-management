import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import * as actions from '../../actions';

import SigninForm from './signinForm';

class Signin extends Component {

    componentDidMount() {
        this.props.updateHeader('Welcome to HOA Manager!', 'Please login to continue', false);
    }

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            this.props.history.push('/dashboard');
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Signin);