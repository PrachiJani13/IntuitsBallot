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
import MainScreen from './component/mianscreen/MainScreen';

function App() {
  return (
    <Router>
      <div>
         <NavBar />
        <Switch>
            <Route exact path="/">
                <MainScreen />
            </Route>
            <Route path="/newelections">
                <NewElection />
            </Route>
            <Route path="/viewelections">
                <Elections />
            </Route>
          <Route path="/registervoters">
            <RegisterVoterTool />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
