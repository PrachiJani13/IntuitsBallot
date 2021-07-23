import { useState, useEffect } from 'react';

import RegisterVoterForm  from './RegisterVoterForm';
import RegisteredVoters  from './RegisteredVoters';
import Footer from '../generics/Footer';
import ToolHeader from '../generics/ToolHeader';

import {dbHostURLVoters} from "../const";


export default function RegisterVoterTool() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(-1);
  const [error, setError] = useState("");

  useEffect(
    () => 
        fetch(dbHostURLVoters)
            .then(checkHttpStatus)
            .then((res) => res.json())
            .then(setUsers)
            .then(()=>setError(""))
            .catch((err) => setError(err.response.statusText)),
        []
);

  function deleteUser(deleteUser) {
    if(deleteUser) {
      const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(deleteUser),
      };
      fetch(`${dbHostURLVoters}/${deleteUser.id}`, requestOptions)
          .then(checkHttpStatus)
          .then(res => {res.json()})
          .then(()=>setError(""))
          .catch((err) => setError(err.response.statusText));
    }
    setUsers(users.filter((user) => user.id !== deleteUser.id));

  }


  function checkHttpStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      return Promise.reject(error);
    }
}

  function addUser(user) {
    console.log("User",user);
    const newId = Math.max(...users.map(user => user.id))+1;
        const newUserObj = { id: newId, votedElectionIDs: [], user: user} 
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUserObj),
        };
        fetch(`${dbHostURLVoters}`, requestOptions)
            .then(checkHttpStatus)
            .then(res => {res.json()})
            .then(()=>setError(""))
            .catch((err) => setError(err.response.statusText));
        setUsers([...users, newUserObj]);
  }

  function saveUser(editedUser) {
    console.log("users", users);
    if(editedUser) {
      const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedUser),
      };
      fetch(`${dbHostURLVoters}/${editedUser.id}`, requestOptions)
          .then(checkHttpStatus)
          .then(res => {res.json()})
          .then(()=>setError(""))
          .catch((err) => setError(err.response.statusText));
      let indexToSave = users.findIndex((user) => user.id === editedUser.id);
      let newUsers = [...users];
      console.log("NewUsers",newUsers);
      newUsers[indexToSave] = editedUser;
      setUsers(newUsers);
      setEditUserId(-1);
  }
}

  function onCancel(){
    setEditUserId(-1);
  }

  return (
    <div>
      <ToolHeader label="Intuit's Ballot" />
      <RegisterVoterForm onComplete={addUser} />
      <p>{error}</p>
      <RegisteredVoters
        users={users}
        editUserId={editUserId}
        onEdit={(id) => setEditUserId(id)}
        onSave={saveUser}
        onDelete={deleteUser}
        onCancel={onCancel}
      />
      <Footer footerText={'Copyright 2021. Intuit Inc.'} />
    </div>
  );
}
