import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if(!this.props.authenticated) {
                this.props.history.push('/')
            }
        }
        componentWillUpdate() {
        
        }
        render() {
            return <ComposedComponent/>
        }
    }

    function mapStateToProps(state) {
        const { authenticated } = state.auth;
        return { authenticated } 
    }
    
    return connect(mapStateToProps)(Authentication)
}
