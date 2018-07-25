import React, { Component } from "react";
import Header from "./Header";
import Destinations from "./Destinations";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => (
  <div>
    <Header />
    <Destinations />
  </div>
);

const Search = () => (
  <div>
    <h2>content</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/Search" component={Search} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
