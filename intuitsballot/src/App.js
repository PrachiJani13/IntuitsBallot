import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useSelector} from "react-redux";

import NavBar from './component/NavBar';
import RegisterVoterForm from './component/RegisterVoter';
import RegisteredVoters from "./component/RegisteredVoters";

function App() {
  const votersData = useSelector(state => state.voterReducer.voters);
  return (
    <Router>
      <div>
         <NavBar />
        <Switch>
          <Route path="/registervoter">
            <RegisterVoterForm />
          </Route>
          <Route path="/registeredvoter">
            <RegisteredVoters voters={votersData}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;