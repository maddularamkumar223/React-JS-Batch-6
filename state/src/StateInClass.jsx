import { Component } from "react";

export default class StateInClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Sub
        </button>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}
