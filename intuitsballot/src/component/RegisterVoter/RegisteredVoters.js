import RegisterVoterViewRow from './RegisterVoterViewRow';
import RegisterVoterEditRow from './RegisterVoterEditRow';

function RegisteredVoters({users, editUserId, onEdit, onDelete, onSave, onCancel}) {
    

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
        </div>
    );
}

export default RegisteredVoters;