import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/products" render={Products} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
