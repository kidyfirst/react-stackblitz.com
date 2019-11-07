import React, { Component } from "react";
import { render } from "react-dom";
import ViewScroll from "./Component/ViewScroll";
import "./Component/ViewScroll/style.css"
import "normalize.css";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <ViewScroll />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
