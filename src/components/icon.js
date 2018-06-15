import React from 'react';

export default function Icon({className, icon, callback}) {
    return (
        <a onClick={callback} className={className}>
            <i className={icon}></i>
        </a>
    )
}
