import React, { Component } from "react";
import Header from "./Header";
import Destinations from "./Destinations";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Destinations />
      </div>
    );
  }
}

export default App;
