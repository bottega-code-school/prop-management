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
                />
                
                {/* </textarea> */}
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

export class FormImage extends Component {

    handleSelectedImage = (event) => {
        const { input: { onChange } } = this.props;
        var image = document.getElementById('newsletter-new-image');
        image.src = URL.createObjectURL(event.target.files[0]);
        onChange(event.target.files[0])
    }

    render() {
        const { className, title, input, imageUrl } = this.props;
        return (
            <div className={`${className} form-image`}>
                <label className='form-image__title'>{title}</label>
                <img
                    id='newsletter-new-image'
                    className='form-image__image'
                    src={imageUrl} 
                />
                <input
                    className='form-image__replace'
                    type='button'
                    value='Replace'
                    onClick={
                        () => document.getElementById('file') ? document.getElementById('file').click() : ''
                    }
                />
                <input {...input} 
                        type='file'
                        style={{display: 'none'}}
                        id='file'
                        name='file'
                        accepts='image/*'
                        value={undefined}
                        onChange={this.handleSelectedImage}
                        />
                {/* replace button/input goes here */}
            </div>
        )
    }
}
