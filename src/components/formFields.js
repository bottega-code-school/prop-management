import React, { Component } from 'react';


export class FormInput extends Component {
    render() {
        const { className, title, input, type, placeholder } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__title'>{title}</label>
                <input
                    className='form-input__input'
                    type={type}
                    {...input}
                    placeholder={placeholder}    
                />
            </div>
        )
    }
}

export class FormTextArea extends Component {
    render() {
        const { className, title, input, type, placeholder } = this.props;
        return (
            <div className={`${className} form-textarea`}>
                <label className='form-textarea__title'>{title}</label>
                <textarea
                    className='form-textarea__input'
                    type={type}
                    {...input}
                    placeholder={placeholder} 
                   
                >
                
                </textarea>
            </div>
        )
    }
}


export class FormButton extends Component {
    render() {
        const { className, title, input, type, small, danger, onClick } = this.props;
        return (
            <div className={`${className} ${small ? 'form-button-small' : 'form-button'}`}>
                <button
                    className={`
                        ${small ? 'form-button-small' : 'form-button'}__button 
                        ${danger ? 'form-button-small__danger' : ''}
                    `}
                    type={type}
                    {...input} 
                    onClick={onClick}
                >
                {title}
                </button>
            </div>
        )
    }
}
