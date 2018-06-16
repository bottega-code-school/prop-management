import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EditNewsletterForm from "./newsletterEditForm";

class EditNewsletter extends Component {
  onSubmit = fields => {
    // if(button == 'submit') {
    //   // save new newsletter on the backend. perform a post request here.
    //   console.log('trying to submit to backend.');
    // }
    this.props.history.push("/dashboard");
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  componentDidMount() {
      this.props.fetchNewsletterWithId(this.props.match.params.id);
  }

  render() {
    return (
      <div className="new-newsletter">
        <EditNewsletterForm
          onCancel={() => this.onCancel()}
          onSubmit={event => this.onSubmit(event)}
          formTitle='Edit Newsletter'
          fieldOneTitle='Newsletter Title'
          fieldTwoTitle='Body'
        />
      </div>
    );
  }
}


export default connect(null, actions)(EditNewsletter);
