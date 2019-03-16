import React, { Component } from "react";
import { Formik } from "formik";
import "./login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", check: true };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: val });
  };

  handleSubmit(event) {
    console.log(
      "email: " + this.state.email,
      "password:" + this.state.password,
      "check: " + this.state.check
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          // onSubmit={(values, { setSubmitting }) => {
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 400);
          // }}
        >
          {({
            // values,
            errors,
            touched,
            // handleChange,
            handleBlur,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={this.handleSubmit}>
              <h1>Login</h1>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={event => this.handleChange(event)}
                onBlur={handleBlur}
                value={this.state.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={event => this.handleChange(event)}
                onBlur={handleBlur}
                value={this.state.password}
              />
              {errors.password && touched.password && errors.password}
              <input
                type="checkbox"
                name="check"
                onBlur={handleBlur}
                checked={this.state.check}
                onChange={event => this.handleChange(event)}
              />
              <h3>Remember Password</h3>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
export default Login;
