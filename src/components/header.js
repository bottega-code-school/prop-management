import React from 'react';

export function Header({ title, subtitle }) {
    return (
        <div className='header'>
            <h1 className='header__title'>{title}</h1>
            <p className='header__subtitle'>{subtitle}</p>
        </div>
    )
}

export function HeaderBar({hideBar}) {
    if(hideBar) {
        return <div></div>
    } else {
        return <div className='bar'></div>
    }
}