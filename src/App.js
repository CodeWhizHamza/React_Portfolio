import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./components/Navbar/NavComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Switch>
          <Route path="/about">
            <About />
            <Footer />
          </Route>
          <Route path="/projects">
            <Projects />
            <Footer />
          </Route>
          <Route path="/contact">
            <Contact />
            <Footer/>
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
