import React, { Component } from 'react';
import { connect } from 'react-redux';

class RequireAdmin extends Component {
    render() {
        if(this.props.admin) {
            return {...this.props.children}
        }
        return <div></div>
    }
}

function mapStateToProps(state) {
    const { admin } = state.auth.user;
    return { admin } 
}

RequireAdmin = connect(mapStateToProps)(RequireAdmin);

export default RequireAdmin;

