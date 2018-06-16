import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header, HeaderBar } from './header';

class Layout extends Component {
    render() {
        return (
            <div className='layout-grid'>
                <Header
                    title='Welcome to HOA Manager!'
                    subtitle='Please login to continue'
                />
                <HeaderBar/>
                {this.props.children}
            </div>
        )
    }
}
 
function mapStateToProps(state) {
    return state;
}

Layout = connect(mapStateToProps)(Layout);

export default Layout;