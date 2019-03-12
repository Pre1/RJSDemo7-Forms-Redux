import React, { Component } from "react";
import ControlledForm from "./ControlledForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <p className="App-intro">Tell us about yourself:</p>
        <ControlledForm />
      </div>
    );
  }
}

export default App;
