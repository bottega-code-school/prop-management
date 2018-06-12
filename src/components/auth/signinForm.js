import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput } from "../formFields";

class SigninForm extends Component {
  render() {
    return (
      <form className="sign-in-form">
        <FormTitle className="sign-in-form__title" text="Login" />
        <Field
          className="sign-in-form__email"
          placeholder="Enter Email"
          name="email"
          type="email"
          title="Email"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          placeholder="Enter Password"
          name="password"
          type="password"
          title="Password"
          component={FormInput}
        />
      </form>
    );
  }
}

SigninForm = reduxForm({
  form: "signin"
})(SigninForm);

export default SigninForm;
