import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import aliasStore from './AliasStore';

class ControlledForm extends Component {
  constructor() {
    super()
    this.state = {
      alias: "",
      description: "",
      email: ""
    }
  }

  textChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submission(e) {
    e.preventDefault();
    aliasStore.submitToBackend(this.state);
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
        <input type="submit" />
      </form>
    );
  }
}

export default observer(ControlledForm);