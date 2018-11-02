import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import * as actionCreatores from "./store/actions/index";

class ControlledForm extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlledForm);
