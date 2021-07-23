import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './component/NavBar';
import RegisterVoterTool from "./component/RegisterVoter/RegisterVoterTool";

function App() {
  return (
    <Router>
      <div>
         <NavBar />
        <Switch>
          <Route path="/registervoters">
            <RegisterVoterTool />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
