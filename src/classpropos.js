import React, { Component } from "react";

class Classpropos extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello{this.props.name} from {this.props.place}! Welcome to My Props
        </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Classpropos;
