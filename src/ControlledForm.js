import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreatores from "./store/actions/index";

class ControlledForm extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlledForm);
