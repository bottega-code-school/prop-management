import React, { Component } from 'react';

class TabNav extends Component {
  render() {
    return (
        <div className='tab-nav'>
            <div className='tab-nav__tabs'>
            {
                this.props.tabs.map((tab, index) => {
                    return <a key={index} onClick={() => this.props.handleClick(tab.title)} className='tab-nav__tab'>{tab.title}</a>
                })
            }
            </div>
            
            {
                this.props.tabs.map((tab, index) => {
                    if(tab.active) {
                        return (
                            <div key={index} className='tab-nav__component'>
                                {tab.component}
                            </div>
                        )
                    }
                })
            }
    
        </div>
    )
  }
}

export default TabNav;
