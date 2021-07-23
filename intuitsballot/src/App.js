import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './component/NavBar';

import NewElection from "./election/NewElection";
import Elections from './election/Elections'
import RegisterVoterTool from "./component/RegisterVoter/RegisterVoterTool";

function App() {
  return (
    <Router>
      <div>
         <NavBar />
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
          <Route path="/registervoters">
            <RegisterVoterTool />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
