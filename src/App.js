import React from "react";
import { Switch } from "react-router";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home.js";
import DevSkills from "./pages/DevSkills.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={DevSkills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
