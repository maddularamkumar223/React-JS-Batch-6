import { Component } from "react";
// import StateInClass from "./StateInClass";
import Counter from "./counter/Counter";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <StateInClass /> */}
        <Counter />
      </div>
    );
  }
}
