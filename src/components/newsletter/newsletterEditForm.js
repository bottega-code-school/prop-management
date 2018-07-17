import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';

import { FormTitle } from "../formTitle";
import { FormInput, FormButton, FormTextArea, FormImage } from "../formFields";

import { ROOT_URL } from '../../config';

class EditNewsletterForm extends Component {

  render() {

    const { handleSubmit, formTitle } = this.props;
    const { 
        fieldOnePlaceholder, fieldOneTitle,
        fieldTwoPlaceholder, fieldTwoTitle
    } = this.props;    

    return (
      <form onSubmit={handleSubmit} className="new-newsletter-form">
        <FormTitle className="new-newsletter-form__title" text={formTitle} />
        <Field
          className="new-newsletter-form__newsletter-title"
          placeholder={fieldOnePlaceholder}
          name="title"
          type="text"
          title={fieldOneTitle}
          component={FormInput}
        />  
        <Field
          className="new-newsletter-form__body"
          placeholder={fieldTwoPlaceholder}
          name="body"
          type="text"
          title={fieldTwoTitle}
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
        <Field
          className="new-newsletter-form__image"
          small={true}
          name="image"
          type="file"
          title="Image"
          component={FormImage}
          imageUrl={this.props.initialValues.imageUrl ?
                    `${ROOT_URL}/${this.props.initialValues.imageUrl}` :
                    'http://via.placeholder.com/150x137'}
        />  

      </form>
    );
  }
}

EditNewsletterForm = reduxForm({
  form: "editnewsletter",
  enableReinitialize: true
})(EditNewsletterForm);

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletters;
  return {
      initialValues: newsletterToEdit
  }
}

EditNewsletterForm = connect(mapStateToProps)(EditNewsletterForm);

export default EditNewsletterForm;
