import { useState } from 'react';
import NewElectionForm from './NewElectionForm';
import './Election.css';



export default function NewElection() {
    const [elections, setElections] = useState([]);

    function addElection(election) {
        setElections([...elections, { ...election, id: Math.max(...elections.map((e) => e.id)) + 1 }]);
    }

      return (
        <div className='.center'>
            <NewElectionForm onSave={addElection} />
        </div>
  );


}