import { useState, useEffect } from 'react';
import NewElectionForm from './NewElectionForm';
import './Election.css';

const ELECTIONS_URL = 'http://localhost:3080/elections';


function checkHttpStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      return Promise.reject(error);
    }
}

export default function NewElection() {
    const [elections, setElections] = useState([]);
     const [error, setError] = useState("");

    useEffect(
        () => 
            fetch(ELECTIONS_URL)
                .then(checkHttpStatus)
                .then((res) => res.json())
                .then(setElections)
                .then(()=>setError(""))
                .catch((err) => setError(err.response.statusText)),
            []
    );

    function addElection(election) {
      console.log("election", election);
      const newId = Math.max(...elections.map(election => election.id))+1;
      const newElectionObj = { id: newId,  ...election} 
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newElectionObj),
      };
      fetch(`${ELECTIONS_URL}`, requestOptions)
        .then(checkHttpStatus)
        .then(res => {res.json()})
        .then(()=>setError(""))
        .catch((err) => setError(err.response.statusText));
      setElections([...elections, newElectionObj]);
    }

      return (
        <div className='.center'>
            <NewElectionForm onSave={addElection} />
            <p>{error}</p>
        </div>
  );


}