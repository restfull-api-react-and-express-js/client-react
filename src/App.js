import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContainerRoutes from "./components/ContainerRoutes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <ContainerRoutes />
        </div>
      </Router>
    );
  }
}

export default App;
