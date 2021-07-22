import {useState} from "react";
const mockUsers = [
    { id: 0, votedElectionIDs: [0, 1, 2], 
      user: 
          {
              firstname: "Prachi", 
              lastname: "Jani", 
              address: "1729 N 1st St", 
              city: "San Jose", 
              birthdate: "09131988", 
              email: "prachi_jani@intuit.com", 
              phone: "4083738410"
          }
      },
    { id: 0, votedElectionIDs: [0, 1, 2], 
        user: 
            {
                firstname: "user2", 
                lastname: "Jani2", 
                address: "2", 
                city: "SF", 
                birthdate: "091df31988", 
                email: "dfs@bfs.com", 
                phone: "12351346"
            }
    },
];
function RegisteredVoters({users=mockUsers}) {
    const voterRows = users.map(userObj => {
        const user = userObj.user;
        return (
            <tr>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.birthdate}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
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
        </div>
    )
}

export default RegisteredVoters;