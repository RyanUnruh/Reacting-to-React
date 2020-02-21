import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dan",
      text: "string test",
      placeholder: "this btn",
      inputVal: "",
      hasLoaded: false
    };
  }
  componentDidMount() {
    this.setState({ hasLoaded: !this.state.hasLoaded })
  }

  handleInput = e => this.setState({ inputVal: e.target.value });

  toggleLoaded() {
    this.setState({ hasLoaded: !this.state.hasLoaded });
  }
  render() {
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <h1>Hello {this.state.name}</h1>
          <h2> {this.props.age} </h2>
          <h3>{this.props.job}</h3>
          <h3>{this.state.text}</h3>
          <input
            type='text'
            onChange={e => this.handleInput(e)}
            name='state-input'
            placeholder={this.state.placeholder}
            value={this.state.inputVal}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Loadeding...</h1>
          <input
            type='button'
            value='Press to load'
            onClick={() => this.toggleLoaded()}
          />
        </React.Fragment>
      );
    }
  }
}

export default App;

// function Comment(props) {
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       <h2>{props.welcome}</h2>
//     </div>
//   );
// }
