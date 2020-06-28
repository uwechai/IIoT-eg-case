import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Counter from "./pages/Counter";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Counter} />
        <Route path="/about" exact component={About} />
      </Router>
    </div>
  );
}
