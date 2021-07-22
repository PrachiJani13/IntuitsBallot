import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './component/NavBar';
import RegisterVoterForm from './component/RegisterVoter';
import RegisteredVoters from "./component/RegisteredVoters";

function App() {
  return (

    <Router>
      <div>
         <NavBar />
        <Switch>
          <Route path="/registervoter">
            <RegisterVoterForm />
          </Route>
          <Route path="/registeredvoter">
            <RegisteredVoters/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
