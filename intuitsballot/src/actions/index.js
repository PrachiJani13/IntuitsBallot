import checkHttpStatus from './checkHttpStatus';

export const REQUEST_VOTERS = "REQUEST_VOTERS";
export const RECEIVE_VOTERS = "RECEIVE_VOTERS";
export const API_ERROR = 'API_ERROR';

export const requestVoters = dbURL => ({
    type: REQUEST_VOTERS,
    dbURL
});

export const receiveVoters = (data) => ({
    type: RECEIVE_VOTERS,
    posts: data,
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