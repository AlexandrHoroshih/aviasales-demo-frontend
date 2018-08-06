import React, { Component } from "react";
import Header from "./Header";
import Destinations from "./Destinations";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import BestPrices from "./BestPrices";
import Slider from "./AgencySlider";

const Main = () => (
  <div>
    <Helmet>
      <title>Дешёвые авиабилеты дёшево</title>
    </Helmet>
    <Header />
    <Destinations />
    <BestPrices />
    <Slider />
  </div>
);

const Search = () => (
  <div>
    <Helmet>
      <title>Выбирай и лети!</title>
    </Helmet>
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
