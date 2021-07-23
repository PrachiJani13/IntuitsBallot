import RegisterVoterViewRow from './RegisterVoterViewRow';
import RegisterVoterEditRow from './RegisterVoterEditRow';
import {useState, useEffect} from "react";
import {dbHostURLVoters} from "../const";
import {fetchVoters} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

function RegisteredVoters({users, editUserId, onEdit, onDelete, onSave, onCancel, onSortFirstName}) {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    useEffect(
        () => dispatch(fetchVoters(dbHostURLVoters)),
        []
    )
    const sortedFnHeader = "First Name↓";
    const normalfnHeader = "First Name↕";
    const [fnHeader, setFnHeader] = useState(normalfnHeader);

    function onFnClick() {
        if (fnHeader === normalfnHeader){
            setFnHeader(sortedFnHeader);
            onSortFirstName();
        }
        else{
            setFnHeader(normalfnHeader);
            dispatch(fetchVoters(dbHostURLVoters));
        }
    }

    let userRows = users.map((user) =>
        editUserId === user.id ? (<RegisterVoterEditRow key={user.id} user={user} onSave={onSave} onCancel={onCancel}/>) : 
            (<RegisterVoterViewRow key={user.id} user={user} onEdit={onEdit} onDelete={onDelete}  />)
    );

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={()=>onFnClick()}>{fnHeader}</th>
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