import { useState } from 'react';
import RegisterVoterForm  from './RegisterVoterForm';
import RegisteredVoters  from './RegisteredVoters';

import {makeDeleteRequest, makeAddRequest, makeEditRequest} from "../../actions";
import {useDispatch, useSelector} from "react-redux";


export default function RegisterVoterTool() {
  const dispatch = useDispatch();
  const votersData = useSelector(state => state.voterReducer.voters);
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(-1);
  const error = useSelector(state => state.error);

  function deleteUser(deleteUser) {
    if(deleteUser) {
      dispatch(makeDeleteRequest(deleteUser));
      setUsers(users.filter((user) => user.id !== deleteUser.id));
    }
  }

  function addUser(user) {
    console.log("User",user);
    const newId = Math.max(...users.map(user => user.id))+1;
    const newUserObj = { id: newId, votedElectionIDs: [], user: user};
    dispatch(makeAddRequest(newUserObj));
    setUsers([...users, newUserObj]);
  }

  function saveUser(editedUser) {
    console.log("users", users);
    if(editedUser) {
      dispatch(makeEditRequest(editedUser));
      let indexToSave = users.findIndex((user) => user.id === editedUser.id);
      let newUsers = [...users];
      console.log("NewUsers",newUsers);
      newUsers[indexToSave] = editedUser;
      setUsers(newUsers);
      setEditUserId(-1);
    }
  }

  function onSortFirstName() {
    console.log("Local user array should start to be sorted");
  }

  function onCancel(){
    setEditUserId(-1);
  }

  return (
    <div>
      <RegisterVoterForm onComplete={addUser} />
      <p>{error}</p>
      <RegisteredVoters
        users={votersData}
        editUserId={editUserId}
        onEdit={(id) => setEditUserId(id)}
        onSave={saveUser}
        onDelete={deleteUser}
        onCancel={onCancel}
        onSortFirstName={onSortFirstName}
      />
    </div>
  );
}
