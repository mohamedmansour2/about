import React, { Component } from "react";
import About from "./components/about";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "@fontsource/cairo";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <About />
      </div>
    );
  }
}

export default App;
