import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../actions';

import TabNav from './tabnav';
import NewsletterGrid from "./newsletter/newsletterGrid";
import RequestsGrid from "./requests/requestsGrid";

class Dashboard extends Component {

    componentDidMount() {
        this.props.updateHeader(`Welcome ${this.props.name}`, 'HOA Management', true);
    }

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: true,
                    component: <NewsletterGrid history={this.props.history}/>
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <RequestsGrid history={this.props.history}/>
                }
            ]
        }
    }

    handleTabChange = (title) => {
        const tabs = this.state.tabs;

        tabs.map(tab => {
            if(tab.title == title) {
                tab.active = true
            } else {
                tab.active = false
            }
        })

        this.setState({ tabs });
    }

  render() {
    return (
        <div className='dashboard'>
            <TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/>
        </div>
    )
  }

}

function mapStateToProps(state) {
    return {
        name: state.auth.user.fullname
    }
}

export default connect(mapStateToProps, actions)(Dashboard);
