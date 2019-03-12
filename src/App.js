import React, { Component } from "react";

// Components
import ControlledForm from "./ControlledForm";
import PeopleList from "./PeopleList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <p className="App-intro">Tell us about yourself:</p>
        <ControlledForm />
        <PeopleList />
      </div>
    );
  }
}

export default App;
