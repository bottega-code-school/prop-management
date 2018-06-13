import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton, FormTextArea } from "../formFields";
import TextLink from "../textLink";

class NewNewsletterForm extends Component {
  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="new-newsletter-form">
        <FormTitle className="new-newsletter-form__title" text="New Newsletter" />
        <Field
          className="new-newsletter-form__newsletter-title"
          placeholder="Newsletter Title"
          name="title"
          type="text"
          title="Newsletter Title"
          component={FormInput}
        />  
        <Field
          className="new-newsletter-form__body"
          placeholder="Newsletter Body"
          name="body"
          type="text"
          title="Body"
          component={FormTextArea}
        />
        <Field
          className="new-newsletter-form__submit"
          small={true}
          danger={true}
          name="submit"
          type="submit"
          title="Submit"
          component={FormButton}
        />  
        <Field
          className="new-newsletter-form__cancel"
          small={true}
          name="cancel"
          type="button"
          title="Cancel"
          component={FormButton}
          onClick={this.props.onCancel}
        />  

      </form>
    );
  }
}

NewNewsletterForm = reduxForm({
  form: "newnewsletter"
})(NewNewsletterForm);

export default NewNewsletterForm;
