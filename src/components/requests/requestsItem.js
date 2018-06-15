import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {
    
    constructor() {
        super()

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        if(this.state.height == 0) {
            this.setState({height: 'auto'})
        } else {
            this.setState({height: 0})
        }
    }

    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item__title'>
                    <div className='requests-item__title__text'>Yo my door fell down</div>
                    <Icon callback={() => this.toggleDropdown()} className='requests-item__title__arrow' icon='fas fa-sort-down'/>
                </div>
                <div className='requests-item__tenant-unit'>
                    Max - Unit 115
                </div>
                <div className='requests-item__date'>
                    09/15/97
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('tryna change request status')}/>

                <div className='requests-item__description'>
                    <AnimateHeight
                        duration={300}
                        height={this.state.height}
                    >
                        <div className='item-description'>
                            <img 
                                className='item-description__img'
                                src='http://via.placeholder.com/160x94'                        
                            />
                            <p className='item-description__text'>
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            </p>
                        </div>
                    </AnimateHeight>
                </div>

            </div>
        )
    }
}

export default RequestsItem;