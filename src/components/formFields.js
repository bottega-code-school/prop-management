import React, { Component } from 'react';


export class FormInput extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className='form-input'>
                <label>{title}</label>
                <input className={`${className} form-input`}/>
            </div>
        )
    }
}
