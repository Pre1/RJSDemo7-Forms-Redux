import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import * as actionCreatores from "./store/actions/index";

class ControlledForm extends Component {
  constructor() {
    super();
    this.state = {
      alias: "",
      description: "",
      email: ""
    };
  }

  textChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submission(e) {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submission.bind(this)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Alias*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="alias"
            onChange={this.textChange.bind(this)}
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
            onChange={this.textChange.bind(this)}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">E-Mail*</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={this.textChange.bind(this)}
          />
        </div>
        <input type="submit" /> <br />
        {this.props.statusMessage}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    statusMessage: state.statusMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: form => dispatch(actionCreatores.postForm(form))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlledForm);
