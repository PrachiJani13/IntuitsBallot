import { useState, useEffect } from 'react';
import NewElectionForm from './NewElectionForm';
import './Election.css';

import {dbHostURLElections} from '../component/const';


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
            fetch(dbHostURLElections)
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
      fetch(`${dbHostURLElections}`, requestOptions)
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