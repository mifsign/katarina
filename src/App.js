import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "./styles/navbar.scss";
import Navbar from "./features/components/Navbar";
import Home from "./features/pages";

class App extends PureComponent {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <Router>
          <div className="scroll">
            <Switch>
              <Route path="/about">About</Route>

              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
