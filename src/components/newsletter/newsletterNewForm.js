import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton, FormTextArea, FormImage } from "../formFields";

class NewNewsletterForm extends Component {

  render() {

    const { handleSubmit, formTitle, newsletterToEdit } = this.props;
    const { 
        fieldOnePlaceholder, fieldOneTitle,
        fieldTwoPlaceholder, fieldTwoTitle
    } = this.props;


    var title = null;
    var body = null;
    var imageUrl = null;
    if(newsletterToEdit) {
      title = newsletterToEdit.title;
      body = newsletterToEdit.body;
      imageUrl = newsletterToEdit.imageUrl;
    }
    

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
          editValue={title ? title : null}
        />  
        <Field
          className="new-newsletter-form__body"
          placeholder={fieldTwoPlaceholder}
          name="body"
          type="text"
          title={fieldTwoTitle}
          component={FormTextArea}
          editValue={body ? body : null}
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
          imageUrl={imageUrl}
        />  


      </form>
    );
  }
}

NewNewsletterForm = reduxForm({
  form: "newnewsletter"
})(NewNewsletterForm);

export default NewNewsletterForm;
