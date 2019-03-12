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
    this.props.submitPerson(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="alias"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">E-Mail*</span>
          </div>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <input className="btn btn-outline-dark" type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    submitPerson: data => dispatch(actionCreators.submitPerson(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlledForm);
