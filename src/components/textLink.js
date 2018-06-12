import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class TextLink extends Component {
    render() {
        const { to, text } = this.props;

        return (
            <Link to={to} className='text-link'>
                {text}
            </Link>
        )
    }
}

export default TextLink;