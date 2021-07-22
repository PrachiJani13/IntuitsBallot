import checkHttpStatus from './checkHttpStatus';

export const REQUEST_VOTERS = "REQUEST_VOTERS";
export const RECEIVE_VOTERS = "RECEIVE_VOTERS";
export const REQUEST_ELECTIONS = "REQUEST_ELECTIONS";
export const RECEIVE_ELECTIONS = "RECEIVE_ELECTIONS";
export const API_ERROR = 'API_ERROR';

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

export const fetchElections = dbURL => dispatch => {
    dispatch(requestElections(dbURL));
    return fetch(dbURL)
      .then(checkHttpStatus)
      .then(json => json.json())
      .then(data => dispatch(receiveElections(data)))
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