import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default App;
