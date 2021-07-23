import checkHttpStatus from './checkHttpStatus';
import {dbHostURLVoters} from "../component/const";

export const REQUEST_VOTERS = "REQUEST_VOTERS";
export const RECEIVE_VOTERS = "RECEIVE_VOTERS";
export const DELETE_VOTER = "DELETE_VOTER";
export const DELETED_VOTER = "DELETED_VOTER";
export const ADD_VOTER = "ADD_VOTER";
export const ADDED_VOTER = "ADDED_VOTER";
export const EDIT_VOTER = "EDIT_VOTER";
export const EDITED_VOTER = "EDITED_VOTER";
export const API_ERROR = 'API_ERROR';
export const REQUEST_ELECTIONS = 'REQUEST_ELECTIONS';
export const RECEIVE_ELECTIONS = 'RECEIVE_ELECTIONS';

export const requestVoters = dbURL => ({
    type: REQUEST_VOTERS,
    dbURL
});

export const receiveVoters = (data) => ({
    type: RECEIVE_VOTERS,
    posts: data,
})

export const requestElections = dbURL => ({
    type: REQUEST_ELECTIONS,
    dbURL
});

export const receiveElections= (data) => ({
    type: RECEIVE_ELECTIONS,
    posts: data,
});
export const deleteVoter = voter => ({
    type: DELETE_VOTER,
    voter
})

export const deletedVoter = (voterId) => ({
    type: DELETED_VOTER,
    voterId
  }
)

export const addVoter = (voter) => ({
  type: ADD_VOTER,
  voter
})

export const addedVoter = (voter) => ({
  type: ADDED_VOTER,
  voter
})

export const editVoter = (voter) => ({
  type: EDIT_VOTER,
  voter
})

export const editedVoter = (voter) => ({
  type: EDITED_VOTER,
  voter
})

export const fetchVoters = dbURL => dispatch => {
    dispatch(requestVoters(dbURL));
    return fetch(dbURL)
      .then(checkHttpStatus)
      .then(json => json.json())
      .then(data => dispatch(receiveVoters(data)))
      .catch(error => {
        console.log('Error:', error);
        dispatch(notifyError(error))
      });
}

export const notifyError = (error) => {
  console.log('Error:', error);
  return {
      type: API_ERROR,
      error: error.message,
  };
}

export const makeDeleteRequest = voter => dispatch => {
  dispatch(deleteVoter(voter));
  const voterId = voter.id;
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(voter),
  };
  return fetch(`${dbHostURLVoters}/${voterId}`, requestOptions)
    .then(checkHttpStatus)
    .then(_ => dispatch(deletedVoter(voterId)))
    .catch(error => {
      console.log('Error:', error);
      dispatch(notifyError(error))
    });
}

export const makeAddRequest = voter => dispatch => {
  dispatch(addVoter(voter));
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(voter),
  };
  fetch(dbHostURLVoters, requestOptions)
      .then(checkHttpStatus)
      .then(_ => dispatch(addedVoter(voter)))
      .catch(error => {
        console.log('Error:', error);
        dispatch(notifyError(error))
      });
}

export const makeEditRequest = voter => dispatch => {
  dispatch(editVoter(voter));
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(voter),
  };
  fetch(`${dbHostURLVoters}/${voter.id}`, requestOptions)
    .then(checkHttpStatus)
    .then(_ => dispatch(editedVoter(voter)))
      .catch(error => {
        console.log('Error:', error);
        dispatch(notifyError(error))
    });
}
