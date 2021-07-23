import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './component/NavBar';

import NewElection from "./election/NewElection";
import Elections from './election/Elections'

function App() {
  return (

    <Router>
      <div>
         <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/newelections">
            <NewElection />
          </Route>
          <Route path="/viewelections">
            <Elections />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
