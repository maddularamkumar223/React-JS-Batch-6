import React from "react";
import Function from "./components/Function";
import ArrowFunction from "./components/ArrowFunction";

class App extends React.Component {
  render() {
    return (
      <article>
        <h1>I am a h1 tag</h1>
        <p>I am a para tag</p>
        <Function></Function>
        <ArrowFunction />
      </article>
    );
  }
}

export default App;
