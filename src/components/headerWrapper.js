import React, { Component } from 'react';

class HeaderWrapper extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                <h1 className='header-wrapper__title'>Welcome to HOA Manager!</h1>
                <p className='header-wrapper__subtitle'>Please login to continue</p>
                {this.props.children}
            </div>
        )
    }
}

export default HeaderWrapper;