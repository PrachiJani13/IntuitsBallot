import { useState, useEffect } from 'react';
import NewElectionForm from './NewElectionForm';
import './Election.css';

const ELECTIONS_URL = 'http://localhost:3050/elections';


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
        setElections([...elections, { ...election, id: Math.max(...elections.map((e) => e.id)) + 1 }]);
    }

      return (
        <div className='.center'>
            <NewElectionForm onSave={addElection} />
            <p>{error}</p>
        </div>
  );


}