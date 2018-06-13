import React from 'react';

export default function Button({className, callback, text, icon}) {
    if(icon) {
        return (
            <a onClick={callback} className={`${className} button`}>
                <i className={icon}></i>
            </a>
        )
    } 
}