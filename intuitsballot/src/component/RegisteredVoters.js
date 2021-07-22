import {useEffect} from "react";
import {dbHostURLVoters} from "./const";
import {fetchVoters} from "../actions";
import {useDispatch, useSelector} from "react-redux";

function RegisteredVoters({voters}) {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    useEffect(
        () => dispatch(fetchVoters(dbHostURLVoters)),
        []
    )

    console.log(voters);
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