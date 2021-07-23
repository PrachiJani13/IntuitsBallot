import RegisterVoterViewRow from './RegisterVoterViewRow';
import RegisterVoterEditRow from './RegisterVoterEditRow';
import {useEffect} from "react";
import {dbHostURLVoters} from "../const";
import {fetchVoters} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

function RegisteredVoters({users, editUserId, onEdit, onDelete, onSave, onCancel}) {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    useEffect(
        () => dispatch(fetchVoters(dbHostURLVoters)),
        []
    )
    let userRows = users.map((user) =>
        editUserId === user.id ? (<RegisterVoterEditRow key={user.id} user={user} onSave={onSave} onCancel={onCancel}/>) : 
            (<RegisterVoterViewRow key={user.id} user={user} onEdit={onEdit} onDelete={onDelete}  />)
    );

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
                    {userRows}
                </tbody>
            </table>
            <p>{error}</p>
        </div>
    );
}

export default RegisteredVoters;