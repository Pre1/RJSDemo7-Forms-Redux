import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

class ControlledForm extends Component {
  state = {
    alias: "",
    description: "",
    email: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitPerson(this.state, this.resetForm);
  };

  resetForm = () => this.setState({ alias: "", description: "", email: "" });

  render() {
    const errors = this.props.errors;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className={`form-control ${errors.alias && "is-invalid"}`}
            name="alias"
            value={this.state.alias}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">{errors.alias}</div>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Description*</span>
          </div>
          <input
            type="text"
            className={`form-control ${errors.description && "is-invalid"}`}
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">{errors.description}</div>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">E-Mail*</span>
          </div>
          <input
            type="email"
            className={`form-control ${errors.email && "is-invalid"}`}
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>
        <input className="btn btn-outline-dark" type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPerson: (data, reset) =>
      dispatch(actionCreators.submitPerson(data, reset))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlledForm);
