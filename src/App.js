// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";
import Classpropos from "./classpropos";
import Functionalprop from "./Functionalprop";

class App extends Component {
  render() {
    return (
      <div>
        <Classpropos name="User 1" place="Lahore">
          <p>Children Component</p>
        </Classpropos>
        <Classpropos name="User 2" place="Islamabad">
          <button>TEST</button>
        </Classpropos>
        <Classpropos name="User 3" place="Karachi" />
        <Functionalprop name="User 4" place="Quetta" />
      </div>
    );
  }
}

export default App;
