import React, { Component } from "react";
import { render } from "react-dom";
// CSS3
// import ViewScroll from "./Component/ViewScroll";
// import "./Component/ViewScroll/style.css"
// Traditional CSS
import ViewScrollOld from "./Component/ViewScrollOld";
import "./Component/ViewScrollOld/style"
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
        <ViewScrollOld />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
