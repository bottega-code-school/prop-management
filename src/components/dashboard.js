import React, { Component } from "react";

import TabNav from './tabnav';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: false,
                    component: <h4>Hey There - Newsletter</h4>
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <h4>Hey There - Requests</h4>
                },
            ]
        }
    }

  render() {
    return (
        <div className='dashboard'>
            <TabNav tabs={this.state.tabs}/>
        </div>
    )
  }

}

export default Dashboard;
