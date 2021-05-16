import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import FrequencyTable from "./components/frequency-table.component";
import Query from "./components/query.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" component={Query} />  
        <Route path="/frequency" exact component={FrequencyTable} />
      </div>
    </Router>
  );
}

export default App;