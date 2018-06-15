import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from "../newsletter/newsletterNewForm";

class NewRequest extends Component {

  onSubmit = fields => {
    // if(button == 'submit') {
    //   // save new newsletter on the backend. perform a post request here.
    //   console.log('trying to submit to backend.');
    // }
    this.props.createNewRequest(this.props._id, fields, () => {
        this.props.history.push("/dashboard");
    })
    
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="new-request">
        <NewNewsletterForm
          onCancel={() => this.onCancel()}
          onSubmit={event => this.onSubmit(event)}
          formTitle='New Request'
          fieldOnePlaceholder='Service Request Title Here'
          fieldOneTitle='Service Request Title'
          fieldTwoPlaceholder='Description Here'
          fieldTwoTitle='Description'
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { _id } = state.auth.user;
    return { _id }
}

NewRequest = connect(mapStateToProps, actions)(NewRequest);

export default NewRequest;
