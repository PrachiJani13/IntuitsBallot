
import { useState, useEffect } from 'react';
import axios from 'axios';
import ElectionRow from './ElectionRow';

const ELECTIONS_URL = 'http://localhost:3050/elections';

function Elections() {

    const [elections, setElections] = useState([]);


    useEffect(
        () =>
        axios
            .get(ELECTIONS_URL)
            .then((res) => setElections(res.data))
            .catch((err) => console.log(err)),
        []
    );

    let electionRows = elections.map((election) =>
        (
        <ElectionRow key={election.id} election={election} />
        )
    );

  return (
    <div className="Elections " >

   <table > 
      <thead>
        <tr>
          <th>ID </th>
          <th>Election Name </th>
          <th>Election ID</th>
          <th>Questions </th>
          <th>Results </th>
        </tr>
      </thead>
      <tbody>
        {electionRows}
      </tbody>
    </table>


    </div>
  );
}

export default Elections;