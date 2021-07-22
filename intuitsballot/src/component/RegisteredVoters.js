import {useState, useEffect} from "react";
import {dbHostURLVoters} from "./const";

// const mockvoters = [
//     { id: 0, votedElectionIDs: [0, 1, 2], 
//       voter: 
//           {
//               firstname: "Prachi", 
//               lastname: "Jani", 
//               address: "1729 N 1st St", 
//               city: "San Jose", 
//               birthdate: "09131988", 
//               email: "prachi_jani@intuit.com", 
//               phone: "4083738410"
//           }
//       },
//     { id: 0, votedElectionIDs: [0, 1, 2], 
//         voter: 
//             {
//                 firstname: "voter2", 
//                 lastname: "Jani2", 
//                 address: "2", 
//                 city: "SF", 
//                 birthdate: "091df31988", 
//                 email: "dfs@bfs.com", 
//                 phone: "12351346"
//             }
//     },
// ];

function checkHttpStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      return Promise.reject(error);
    }
}

function RegisteredVoters() {
    const [voters, setVoters] = useState([])
    const [error, setError] = useState("");

    useEffect(
        () => 
            fetch(dbHostURLVoters)
                .then(checkHttpStatus)
                .then((res) => res.json())
                .then(setVoters)
                .then(()=>setError(""))
                .catch((err) => setError(err.response.statusText)),
            []
    );

    // // Put this anywhere you see fit
    // function handleDeleteClick(voterId) {
    //     fetch(dbHostURLVoters, { method: 'DELETE' })
    //             .then(checkHttpStatus)
    //             .then(res => res.json())
    //             .then(()=>setError(""))
    //             .catch((err) => setError(err.response.statusText));
    //     setVoters(voters.filter(voter => {return voter.id !== voterId}));
    // }

    const voterRows = voters.map(userObj => {
        const voter = userObj.user;
        return (
            <tr>
                <td>{voter.firstname}</td>
                <td>{voter.lastname}</td>
                <td>{voter.address}</td>
                <td>{voter.city}</td>
                <td>{voter.birthdate}</td>
                <td>{voter.email}</td>
                <td>{voter.phone}</td>
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        )
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Birthdate</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {voterRows}
                </tbody>
            </table>
            <p>{error}</p>
        </div>
    )
}

export default RegisteredVoters;